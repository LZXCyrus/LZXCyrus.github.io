/**
 * 关于我页面组件
 */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, MapPin, Download, Github } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';

// CSDN 图标组件
const CSDNIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
    <path d="M17.5 7.5c-.28 0-.5.22-.5.5v8c0 .28.22.5.5.5s.5-.22.5-.5v-8c0-.28-.22-.5-.5-.5z"/>
    <path d="M7.5 7.5c-.28 0-.5.22-.5.5v8c0 .28.22.5.5.5s.5-.22.5-.5v-8c0-.28-.22-.5-.5-.5z"/>
    <path d="M12 4C6.48 4 4 6.48 4 12s2.48 8 8 8 8-2.48 8-8-2.48-8-8-8zm0 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
  </svg>
);

// Instagram 图标组件
const InstagramIcon = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const AboutPage = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const skills = [
    { category: 'Frontend', items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion'] },
    { category: 'Backend', items: ['Node.js', 'Python', 'SQL'] },
    { category: 'Tools', items: ['Git', 'Docker'] },
  ];

  const experiences = [
    {
      title: 'A Multi-graph Learning Framework to Fuse Heterogeneous Market Information for Stock Forecasting',
      company: 'Expert Systems with Applications',
      period: '2026',
      description: (
        <>
          <span className="font-bold">Li, Z.</span>, Xiong, J., Wang, J., Tan, J., Du Jardin, P., Deveci, M., & Zhong, K.
        </>
      ),
    },
    {
      title: 'GraphShield: Spatiotemporal Fusion for Risk Propagation Containment in Financial Networks',
      company: 'Applied Soft Computing',
      period: '2026',
      description: (
        <>
          Yu, G., Chen, Y., <span className="font-bold">Li, Z.</span>, & Wang, J.
        </>
      ),
    },
    {
      title: 'A Multiscale Time-series Decomposition Learning for Crude Oil Price Forecasting',
      company: 'Energy Economics',
      period: '2024',
      description: (
        <>
          Tan, J., <span className="font-bold">Li, Z.</span>, Zhang, C., Shi, L., & Jiang, Y.
        </>
      ),
    },
  ];

  const education = [
    {
      degree: isEnglish ? 'B.S. Data Science and Big Data Technology' : '数据科学与大数据技术 学士',
      school: isEnglish ? 'Southwestern University of Finance and Economics' : '西南财经大学',
      period: '2020 - 2024',
    },
    {
      degree: isEnglish ? 'M.S. Management Science and Engineering' : '管理科学与工程 硕士',
      school: isEnglish ? 'Southwestern University of Finance and Economics' : '西南财经大学',
      period: '2024 - 2027',
    },
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/LZXCyrus', label: 'GitHub' },
    { icon: CSDNIcon, url: 'https://blog.csdn.net/m0_65814643', label: 'CSDN' },
    { icon: InstagramIcon, url: 'https://instagram.com', label: 'Instagram' },
  ];

  return (
    <div className="min-h-screen bg-anthropic-cream pt-24 pb-16">
      {/* 动态背景 */}
      <AnimatedBackground variant="particles" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold text-anthropic-charcoal mb-4">
            {t('about.title')}
          </h1>
          <p className="text-xl text-anthropic-taupe">{t('about.subtitle')}</p>
        </motion.div>

        {/* Profile Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Avatar */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/*
                头像占位 - 可替换为实际头像图片
                请将图片放置在 public/images/avatar.jpg 或修改下面的 src
              */}
              <img
                src="/images/avatar.jpg"
                alt="Profile"
                className="w-72 h-72 rounded-2xl object-cover border-4 border-white shadow-xl"
              />
              {/*
                替换为实际头像图片请使用以下代码：
                <img
                  src="/images/avatar.jpg"
                  alt="Profile"
                  className="w-72 h-72 rounded-2xl object-cover border-4 border-white shadow-xl"
                />
              */}
              <motion.div
                className="absolute -bottom-4 -right-4 w-16 h-16 bg-anthropic-terracotta rounded-full flex items-center justify-center shadow-lg"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: 'reverse' }}
              >
                <span className="text-2xl">👋</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-2xl font-serif font-bold text-anthropic-charcoal mb-4">
              {isEnglish ? 'Hello!' : '你好！'}
            </h2>
            <p className="text-anthropic-taupe leading-relaxed mb-6">
              {t('about.bio')}
            </p>
            <p className="text-anthropic-taupe leading-relaxed mb-8">
              {isEnglish
                ? 'When I\'m not coding, you can find me writing novels, editing videos, taking photos, traveling, or enjoying live shows.'
                : '当我不写代码时，你可以发现我在写小说、做影视剪辑、摄影、旅行，或者看live。'}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <motion.div
                className="flex items-center gap-3 text-anthropic-taupe"
                whileHover={{ x: 5 }}
              >
                <Mail size={18} className="text-anthropic-terracotta" />
                <span>lzxcyrus@126.com</span>
              </motion.div>
              <motion.div
                className="flex items-center gap-3 text-anthropic-taupe"
                whileHover={{ x: 5 }}
              >
                <MapPin size={18} className="text-anthropic-terracotta" />
                <span>{isEnglish ? 'Chengdu, Sichuan' : '成都，四川'}</span>
              </motion.div>
            </div>

            {/* Social Links & Download */}
            <div className="flex items-center gap-4 mt-8">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-anthropic-taupe/30 flex items-center justify-center text-anthropic-taupe hover:bg-anthropic-terracotta hover:text-white hover:border-anthropic-terracotta transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
              <motion.button
                className="ml-auto flex items-center gap-2 px-4 py-2 bg-anthropic-charcoal text-anthropic-cream rounded-full text-sm font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={16} />
                {isEnglish ? 'Resume' : '简历'}
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-3xl font-serif font-bold text-anthropic-charcoal mb-8 text-center">
            {t('about.skills')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                className="p-6 bg-white rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <h3 className="text-lg font-bold text-anthropic-terracotta mb-4">
                  {skillGroup.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1.5 bg-anthropic-taupe/10 text-anthropic-taupe rounded-full text-sm"
                      whileHover={{ scale: 1.05, backgroundColor: 'rgba(180, 100, 75, 0.2)' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-3xl font-serif font-bold text-anthropic-charcoal mb-8 text-center">
            {t('about.experience')}
          </h2>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-6 border-l-2 border-anthropic-taupe/20 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-anthropic-terracotta" />
                <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-anthropic-charcoal">{exp.title}</h3>
                    <span className="text-sm text-anthropic-taupe">{exp.period}</span>
                  </div>
                  <p className="text-anthropic-terracotta font-medium mb-2">{exp.company}</p>
                  <p className="text-anthropic-taupe text-sm">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <h2 className="text-3xl font-serif font-bold text-anthropic-charcoal mb-8 text-center">
            {t('about.education')}
          </h2>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="relative pl-8 pb-6 border-l-2 border-anthropic-taupe/20 last:pb-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute left-0 top-0 w-4 h-4 -translate-x-[9px] rounded-full bg-anthropic-terracotta" />
                <div className="bg-white rounded-xl p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl font-bold text-anthropic-charcoal">{edu.degree}</h3>
                    <span className="text-sm text-anthropic-taupe">{edu.period}</span>
                  </div>
                  <p className="text-anthropic-terracotta font-medium">{edu.school}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact CTA */}
        <motion.section
          className="text-center py-12 bg-anthropic-charcoal rounded-3xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h2 className="text-3xl font-serif font-bold text-anthropic-cream mb-4">
            {t('about.contact')}
          </h2>
          <p className="text-anthropic-cream/70 mb-8 max-w-md mx-auto">
            {isEnglish
              ? 'Interested in working together? Feel free to reach out!'
              : '有兴趣一起工作吗？随时联系我！'}
          </p>
          <motion.a
            href="mailto:lzxcyrus@126.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-anthropic-terracotta text-anthropic-cream rounded-full font-medium"
            whileHover={{ scale: 1.05, boxShadow: '0 10px 40px rgba(180, 100, 75, 0.4)' }}
            whileTap={{ scale: 0.95 }}
          >
            <Mail size={18} />
            {isEnglish ? 'Send an Email' : '发送邮件'}
          </motion.a>
        </motion.section>
      </div>
    </div>
  );
};

export default AboutPage;
