/**
 * 项目详情页组件
 */
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ExternalLink, Github, Calendar, Briefcase } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { projects } from '../data/projects';

const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen bg-anthropic-cream pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-serif font-bold text-anthropic-charcoal mb-4">
            {isEnglish ? 'Project Not Found' : '项目未找到'}
          </h1>
          <Link to="/projects">
            <motion.button
              className="px-6 py-3 bg-anthropic-terracotta text-anthropic-cream rounded-full font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('projectDetail.back')}
            </motion.button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-anthropic-cream pt-24 pb-16">
      {/* 动态背景 */}
      <AnimatedBackground variant="gradient" />

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Back Button */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/projects">
            <motion.button
              className="group flex items-center gap-2 text-anthropic-taupe hover:text-anthropic-charcoal transition-colors"
              whileHover={{ x: -5 }}
            >
              <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
              {t('projectDetail.back')}
            </motion.button>
          </Link>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          className="relative h-80 md:h-96 rounded-2xl overflow-hidden mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <img
            src={project.image}
            alt={isEnglish ? project.titleEn : project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </motion.div>

        {/* Project Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-anthropic-charcoal mb-6">
            {isEnglish ? project.titleEn : project.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap gap-6 mb-8">
            <div className="flex items-center gap-2 text-anthropic-taupe">
              <Calendar size={18} />
              <span>{project.year}</span>
            </div>
            <div className="flex items-center gap-2 text-anthropic-taupe">
              <Briefcase size={18} />
              <span>{isEnglish ? project.roleEn : project.role}</span>
            </div>
          </div>

          {/* Description */}
          <div className="prose prose-lg max-w-none">
            <p className="text-anthropic-taupe leading-relaxed text-lg">
              {isEnglish ? project.longDescriptionEn : project.longDescription}
            </p>
          </div>
        </motion.div>

        {/* Technologies */}
        <motion.section
          className="mb-12 p-8 bg-white rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h2 className="text-2xl font-serif font-bold text-anthropic-charcoal mb-6">
            {t('projectDetail.technologies')}
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-anthropic-taupe/10 text-anthropic-taupe rounded-full font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Project Links */}
        <motion.section
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl font-serif font-bold text-anthropic-charcoal mb-6">
            {t('projectDetail.links')}
          </h2>
          <div className="flex flex-wrap gap-4">
            {project.liveUrl && (
              <motion.a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 bg-anthropic-terracotta text-anthropic-cream rounded-full font-medium flex items-center gap-2 hover:bg-anthropic-terracotta/90 transition-all"
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(180, 100, 75, 0.3)' }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={18} />
                {t('projects.viewLive')}
              </motion.a>
            )}
            {project.githubUrl && (
              <motion.a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-6 py-3 border border-anthropic-charcoal text-anthropic-charcoal rounded-full font-medium flex items-center gap-2 hover:bg-anthropic-charcoal hover:text-anthropic-cream transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={18} />
                {t('projects.viewGithub')}
              </motion.a>
            )}
          </div>
        </motion.section>

        {/* Related Projects */}
        <motion.div
          className="border-t border-anthropic-taupe/10 pt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/projects">
            <motion.button
              className="group flex items-center gap-2 mx-auto text-anthropic-terracotta font-medium"
              whileHover={{ x: 5 }}
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              {t('projectDetail.back')}
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
