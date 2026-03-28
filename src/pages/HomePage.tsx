/**
 * 首页组件
 * 包含 Hero 区域和交互式星图
 */
import { useRef, useState, useEffect, useMemo } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// 生成稳定的星星数据（使用种子确保一致性）
const generateStars = (count: number, type: 'main' | 'constellation' | 'nebula') => {
  const stars = [];
  const seed = 12345; // 固定种子确保每次生成相同的星星

  for (let i = 0; i < count; i++) {
    // 使用简单的伪随机数生成器确保一致性
    const pseudoRandom = (seed: number, index: number) => {
      const x = Math.sin(seed + index) * 10000;
      return x - Math.floor(x);
    };

    const rand = (index: number) => pseudoRandom(seed, i * 10 + index);

    stars.push({
      id: `${type}-${i}`,
      x: rand(1) * 100,
      y: rand(2) * 100,
      size: type === 'main'
        ? rand(3) * 2 + 0.5
        : type === 'constellation'
        ? rand(3) * 1.2 + 0.3
        : rand(3) * 3 + 1,
      brightness: type === 'main' ? rand(4) * 0.5 + 0.5 : rand(4) * 0.3 + 0.1,
      twinkleDuration: rand(5) * 4 + 3,
      twinkleDelay: rand(6) * 8,
      hue: rand(7) > 0.85 ? 'blue' : rand(7) > 0.7 ? 'warm' : 'purple',
      // 缓慢漂移参数
      driftX: (rand(8) - 0.5) * 0.02,
      driftY: (rand(9) - 0.5) * 0.02,
    });
  }
  return stars;
};

// 增强版星空组件 - 更真实的星空效果
const StarMap = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [smoothMousePos, setSmoothMousePos] = useState({ x: 0.5, y: 0.5 });
  const [driftOffset, setDriftOffset] = useState({ x: 0, y: 0 });
  const [shootingStars, setShootingStars] = useState<Array<{ id: number; angle: number; delay: number; startX: number; startY: number }>>([]);
  const animationFrameRef = useRef<number>();

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // 使用 useMemo 确保星星数据稳定，不会每次渲染都重新生成
  const mainStars = useMemo(() => generateStars(100, 'main'), []);
  const constellationStars = useMemo(() => generateStars(50, 'constellation'), []);
  const nebulaStars = useMemo(() => generateStars(20, 'nebula'), []);

  // 鼠标移动跟踪 - 使用 requestAnimationFrame 平滑处理
  useEffect(() => {
    let targetX = 0.5;
    let targetY = 0.5;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        targetX = (e.clientX - rect.left) / rect.width;
        targetY = (e.clientY - rect.top) / rect.height;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 使用 requestAnimationFrame 平滑插值
    const animate = () => {
      setSmoothMousePos(prev => ({
        x: prev.x + (targetX - prev.x) * 0.08,
        y: prev.y + (targetY - prev.y) * 0.08,
      }));
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // 星空缓慢漂移动画
  useEffect(() => {
    let startTime = Date.now();
    const animate = () => {
      const elapsed = (Date.now() - startTime) / 1000;
      setDriftOffset({
        x: Math.sin(elapsed * 0.1) * 0.5,
        y: Math.cos(elapsed * 0.08) * 0.3,
      });
      requestAnimationFrame(animate);
    };
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, []);

  // 生成流星 - 改进版本，更自然的出现频率
  useEffect(() => {
    const createShootingStar = () => {
      const angle = 25 + Math.random() * 40; // 25-65度，更自然的角度
      const startX = 80 + Math.random() * 25;
      const startY = Math.random() * 40;

      const newStar = {
        id: Date.now() + Math.random(),
        angle,
        delay: 0, // 立即开始
        startX,
        startY,
      };

      setShootingStars(prev => [...prev.slice(-5), newStar]); // 最多保留5个

      // 随机间隔 4-10 秒
      const nextInterval = 4000 + Math.random() * 6000;
      setTimeout(createShootingStar, nextInterval);
    };

    // 初始延迟后开始
    const initialTimeout = setTimeout(createShootingStar, 2000);
    return () => clearTimeout(initialTimeout);
  }, []);

  // 获取星星颜色
  const getStarColor = (hue: string, brightness: number) => {
    const colors: Record<string, string> = {
      blue: `rgba(180, 210, 255, ${brightness})`,
      warm: `rgba(255, 220, 180, ${brightness})`,
      purple: `rgba(200, 180, 255, ${brightness})`,
      white: `rgba(255, 255, 255, ${brightness})`,
    };
    return colors[hue] || colors.white;
  };

  return (
    <motion.div
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden select-none"
      style={{ opacity }}
    >
      {/* 深空背景渐变 - 更柔和 */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 100% at 50% 120%, rgba(45, 35, 50, 0.8) 0%, transparent 60%),
            radial-gradient(ellipse 80% 50% at 20% 20%, rgba(60, 50, 80, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse 60% 40% at 80% 30%, rgba(80, 60, 90, 0.12) 0%, transparent 45%),
            linear-gradient(180deg, #1a1520 0%, #2D2926 100%)
          `,
        }}
      />

      {/* 星云层 - 添加氛围感 */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{
          background: [
            'radial-gradient(ellipse 40% 30% at 30% 60%, rgba(100, 80, 140, 0.08) 0%, transparent 70%)',
            'radial-gradient(ellipse 40% 30% at 32% 58%, rgba(100, 80, 140, 0.08) 0%, transparent 70%)',
            'radial-gradient(ellipse 40% 30% at 30% 60%, rgba(100, 80, 140, 0.08) 0%, transparent 70%)',
          ],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* 鼠标交互光晕 - 更平滑 */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          left: `${smoothMousePos.x * 100}%`,
          top: `${smoothMousePos.y * 100}%`,
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(180, 160, 200, 0.06) 0%, rgba(120, 140, 180, 0.02) 30%, transparent 60%)',
        }}
        animate={{
          x: (smoothMousePos.x - 0.5) * -20 + driftOffset.x * 10,
          y: (smoothMousePos.y - 0.5) * -20 + driftOffset.y * 10,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 20 }}
      />

      {/* SVG 星空层 */}
      <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
        <defs>
          {/* 星星发光滤镜 - 更柔和 */}
          <filter id="starGlow" x="-200%" y="-200%" width="500%" height="500%">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* 柔和扩散滤镜 */}
          <filter id="softGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* 流星渐变 */}
          <linearGradient id="shootingGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255, 255, 255, 0)" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.8)" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
          </linearGradient>

          {/* 星云渐变 */}
          <radialGradient id="nebulaGradient">
            <stop offset="0%" stopColor="rgba(180, 160, 220, 0.3)" />
            <stop offset="100%" stopColor="rgba(180, 160, 220, 0)" />
          </radialGradient>
        </defs>

        {/* 应用漂移效果 */}
        <g style={{
          transform: `translate(${driftOffset.x}px, ${driftOffset.y}px)`,
          transition: 'transform 0.1s ease-out'
        }}>
          {/* 星云层 */}
          {nebulaStars.slice(0, 5).map((star) => (
            <motion.circle
              key={star.id}
              cx={`${star.x}%`}
              cy={`${star.y}%`}
              r="15"
              fill="url(#nebulaGradient)"
              animate={{
                opacity: [0.3, 0.5, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: star.twinkleDuration * 2,
                delay: star.twinkleDelay,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
          ))}

          {/* 背景星群（较暗的连接星群） */}
          {constellationStars.map((star) => (
            <circle
              key={star.id}
              cx={`${star.x}%`}
              cy={`${star.y}%`}
              r={star.size}
              fill={getStarColor('white', star.brightness * 0.4)}
            />
          ))}

          {/* 闪烁的主星星 */}
          {mainStars.map((star) => {
            // 计算与鼠标的距离
            const distanceToMouse = Math.sqrt(
              Math.pow(smoothMousePos.x * 100 - star.x, 2) +
              Math.pow(smoothMousePos.y * 100 - star.y, 2)
            );
            const isNearMouse = distanceToMouse < 20;
            const mouseBrightnessBoost = isNearMouse ? 0.3 : 0;

            return (
              <motion.circle
                key={star.id}
                cx={`${star.x}%`}
                cy={`${star.y}%`}
                r={star.size}
                fill={getStarColor(star.hue, star.brightness + mouseBrightnessBoost)}
                filter="url(#starGlow)"
                animate={{
                  opacity: [
                    star.brightness * 0.6,
                    star.brightness + mouseBrightnessBoost,
                    star.brightness * 0.6,
                  ],
                  scale: [0.9, 1, 0.9],
                }}
                transition={{
                  duration: star.twinkleDuration,
                  delay: star.twinkleDelay,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            );
          })}

          {/* 流星 */}
          {shootingStars.map((star) => (
            <ShootingStar key={star.id} {...star} />
          ))}
        </g>
      </svg>

      {/* 鼠标附近的高亮光晕效果 */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          left: `${smoothMousePos.x * 100}%`,
          top: `${smoothMousePos.y * 100}%`,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      >
        <div
          className="w-32 h-32 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(200, 180, 255, 0.15) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* 底部渐变遮罩 - 使星空与内容平滑过渡 */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #2D2926 0%, transparent 100%)',
        }}
      />
    </motion.div>
  );
};

// 流星组件 - 改进版
const ShootingStar = ({ angle, startX, startY }: { angle: number; delay?: number; startX: number; startY: number }) => {
  const radians = (angle * Math.PI) / 180;
  const length = 200;

  return (
    <motion.line
      x1={`${startX}%`}
      y1={`${startY}%`}
      x2={`${startX - Math.cos(radians) * length}%`}
      y2={`${startY + Math.sin(radians) * length}%`}
      stroke="url(#shootingGradient)"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ opacity: 0, x1: `${startX}%`, y1: `${startY}%` }}
      animate={{
        opacity: [0, 1, 1, 0],
        x1: [`${startX}%`, `${startX - Math.cos(radians) * length * 0.3}%`],
        y1: [`${startY}%`, `${startY + Math.sin(radians) * length * 0.3}%`],
        x2: [`${startX}%`, `${startX - Math.cos(radians) * length * 1.2}%`],
        y2: [`${startY}%`, `${startY + Math.sin(radians) * length * 1.2}%`],
      }}
      transition={{
        duration: 1.8,
        ease: 'easeOut',
      }}
      style={{ filter: 'blur(1px)' }}
    />
  );
};

const HomePage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#2D2926' }}>
      {/* 交互式星图背景 */}
      <StarMap />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6">
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          {/* 顶部装饰线 - 调整为浅色 */}
          <motion.div
            className="w-px h-20 mx-auto mb-10"
            style={{
              background: 'linear-gradient(to bottom, transparent, rgba(200, 190, 220, 0.5))',
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
          />

          <motion.p
            className="text-sm tracking-[0.3em] uppercase mb-8"
            style={{
              color: '#E8A090',
              fontFamily: 'system-ui, sans-serif',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t('hero.greeting')}
          </motion.p>

          {/* Your Name */}
          <motion.h1
            className="text-6xl md:text-7xl lg:text-8xl font-bold mb-10 leading-[1.05]"
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              color: '#F5F0EB',
              textShadow: '0 0 40px rgba(200, 180, 220, 0.3)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {t('hero.name')}
          </motion.h1>

          <motion.p
            className="text-base md:text-lg max-w-xl mx-auto mb-14 leading-relaxed"
            style={{
              fontFamily: 'system-ui, sans-serif',
              color: 'rgba(200, 195, 210, 0.85)',
            }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            {t('hero.description')}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link to="/projects">
              <motion.button
                className="group px-12 py-5 font-medium flex items-center gap-3 transition-all rounded-full"
                style={{
                  backgroundColor: '#B4644B',
                  color: '#FAF7F2',
                  fontFamily: 'system-ui, sans-serif',
                }}
                whileHover={{
                  scale: 1.03,
                  boxShadow: '0 12px 40px rgba(180, 100, 75, 0.5)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                {t('hero.cta')}
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <ArrowRight size={18} />
                </motion.span>
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                className="px-12 py-5 font-medium transition-all rounded-full"
                style={{
                  border: '1px solid rgba(200, 190, 220, 0.5)',
                  color: '#F5F0EB',
                  fontFamily: 'system-ui, sans-serif',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                }}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: 'rgba(200, 190, 220, 0.15)',
                  borderColor: 'rgba(200, 190, 220, 0.8)',
                }}
                whileTap={{ scale: 0.97 }}
              >
                {t('nav.about')}
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
