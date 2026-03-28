/**
 * 动态背景组件
 * 每个页面可定制的柔和动态背景效果
 */
import { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface AnimatedBackgroundProps {
  variant?: 'gradient' | 'particles' | 'waves' | 'minimal';
  className?: string;
}

// 渐变背景变体
const GradientBackground = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      background: [
        'radial-gradient(ellipse at 20% 30%, rgba(196, 147, 115, 0.15) 0%, transparent 50%)',
        'radial-gradient(ellipse at 80% 70%, rgba(180, 100, 75, 0.1) 0%, transparent 50%)',
        'radial-gradient(ellipse at 50% 50%, rgba(196, 147, 115, 0.08) 0%, transparent 60%)',
      ],
      transition: { duration: 15, repeat: Infinity, repeatType: 'reverse' }
    });
  }, [controls]);

  return (
    <motion.div
      animate={controls}
      className="absolute inset-0 -z-10"
    />
  );
};

// 粒子背景变体
const ParticlesBackground = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-anthropic-terracotta/20"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// 波浪背景变体
const WavesBackground = () => {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute w-full h-full opacity-10"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M0,160 C480,240 960,80 1440,160 L1440,320 L0,320 Z"
          fill="rgba(196, 147, 115, 0.3)"
          animate={{
            d: [
              'M0,160 C480,240 960,80 1440,160 L1440,320 L0,320 Z',
              'M0,200 C480,120 960,240 1440,120 L1440,320 L0,320 Z',
              'M0,160 C480,240 960,80 1440,160 L1440,320 L0,320 Z',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0,220 C360,180 720,260 1080,200 L1440,240 L1440,320 L0,320 Z"
          fill="rgba(180, 100, 75, 0.2)"
          animate={{
            d: [
              'M0,220 C360,180 720,260 1080,200 L1440,240 L1440,320 L0,320 Z',
              'M0,180 C360,240 720,160 1080,220 L1440,180 L1440,320 L0,320 Z',
              'M0,220 C360,180 720,260 1080,200 L1440,240 L1440,320 L0,320 Z',
            ],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </div>
  );
};

// 简约背景变体
const MinimalBackground = () => {
  return (
    <div className="absolute inset-0 -z-10">
      <div className="absolute top-20 left-20 w-64 h-64 rounded-full bg-anthropic-terracotta/5 blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full bg-anthropic-taupe/5 blur-3xl" />
    </div>
  );

};

const AnimatedBackground = ({ variant = 'gradient', className = '' }: AnimatedBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {variant === 'gradient' && <GradientBackground />}
      {variant === 'particles' && <ParticlesBackground />}
      {variant === 'waves' && <WavesBackground />}
      {variant === 'minimal' && <MinimalBackground />}
    </div>
  );
};

export default AnimatedBackground;
