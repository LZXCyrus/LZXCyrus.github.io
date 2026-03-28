/**
 * 项目列表页组件
 */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { projects } from '../data/projects';

const ProjectsPage = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  return (
    <div className="min-h-screen bg-anthropic-cream pt-24 pb-16">
      {/* 动态背景 */}
      <AnimatedBackground variant="waves" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-serif font-bold text-anthropic-charcoal mb-4">
            {t('projects.title')}
          </h1>
          <p className="text-xl text-anthropic-taupe max-w-2xl mx-auto">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <motion.div
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
                whileHover={{ y: -5 }}
              >
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={project.image}
                    alt={isEnglish ? project.titleEn : project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                  {/* Year Badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-anthropic-charcoal">
                    {project.year}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-serif font-bold text-anthropic-charcoal mb-3 group-hover:text-anthropic-terracotta transition-colors">
                    {isEnglish ? project.titleEn : project.title}
                  </h3>

                  <p className="text-anthropic-taupe mb-6 leading-relaxed flex-grow">
                    {isEnglish ? project.descriptionEn : project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <p className="text-sm font-medium text-anthropic-charcoal mb-2">{t('projects.tech')}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <motion.span
                          key={tech}
                          className="px-3 py-1.5 text-sm bg-anthropic-taupe/10 text-anthropic-taupe rounded-full"
                          whileHover={{ scale: 1.05 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-4 border-t border-anthropic-taupe/10">
                    <Link to={`/projects/${project.id}`}>
                      <motion.button
                        className="group flex items-center gap-2 text-anthropic-terracotta font-medium"
                        whileHover={{ x: 5 }}
                      >
                        {t('projects.viewDetails')}
                        <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </motion.button>
                    </Link>

                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <motion.a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-anthropic-taupe hover:text-anthropic-charcoal transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="GitHub"
                        >
                          <Github size={20} />
                        </motion.a>
                      )}
                      {project.liveUrl && (
                        <motion.a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-anthropic-taupe hover:text-anthropic-charcoal transition-colors"
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Live Demo"
                        >
                          <ExternalLink size={20} />
                        </motion.a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
