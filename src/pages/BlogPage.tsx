/**
 * 技术博客页组件
 */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ExternalLink, Calendar, Clock, ArrowRight } from 'lucide-react';
import AnimatedBackground from '../components/AnimatedBackground';
import { blogPosts } from '../data/blogPosts';

const BlogPage = () => {
  const { t, i18n } = useTranslation();
  const isEnglish = i18n.language === 'en';

  // 特色文章
  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(isEnglish ? 'en-US' : 'zh-CN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

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
            {t('blog.title')}
          </h1>
          <p className="text-xl text-anthropic-taupe max-w-2xl mx-auto">
            {t('blog.subtitle')}
          </p>
        </motion.div>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl font-serif font-bold text-anthropic-charcoal mb-8">
              {isEnglish ? 'Featured Articles' : '精选文章'}
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredPosts.slice(0, 2).map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  {/* Image placeholder */}
                  <div className="h-48 bg-gradient-to-br from-anthropic-taupe/20 to-anthropic-terracotta/10 flex items-center justify-center">
                    <span className="text-6xl opacity-30 group-hover:opacity-50 transition-opacity">
                      {index === 0 ? '📝' : '💻'}
                    </span>
                  </div>

                  <div className="p-8">
                    {/* Category Badge */}
                    <span className="inline-block px-3 py-1 bg-anthropic-terracotta/10 text-anthropic-terracotta rounded-full text-xs font-medium mb-4">
                      {isEnglish ? post.categoryEn : post.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl font-serif font-bold text-anthropic-charcoal mb-3 group-hover:text-anthropic-terracotta transition-colors">
                      {isEnglish ? post.titleEn : post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-anthropic-taupe mb-4 line-clamp-3">
                      {isEnglish ? post.excerptEn : post.excerpt}
                    </p>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-anthropic-taupe/70 mb-4">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {formatDate(post.date)}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={14} />
                        {isEnglish ? post.readingTimeEn : post.readingTime}
                      </span>
                    </div>

                    {/* Read More Link */}
                    {post.readMoreUrl && (
                      <motion.a
                        href={post.readMoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/link inline-flex items-center gap-2 text-anthropic-terracotta font-medium"
                        whileHover={{ x: 5 }}
                      >
                        {t('blog.readMore')}
                        <ExternalLink size={16} className="group-hover/link:translate-x-1 transition-transform" />
                      </motion.a>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section>
          <h2 className="text-2xl font-serif font-bold text-anthropic-charcoal mb-8">
            {isEnglish ? 'All Articles' : '所有文章'}
          </h2>

          {blogPosts.length === 0 ? (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="text-anthropic-taupe text-lg">{t('blog.noArticles')}</p>
            </motion.div>
          ) : (
            <div className="space-y-6">
              {blogPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  className="group bg-white rounded-xl p-6 md:p-8 hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    {/* Content */}
                    <div className="flex-grow">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="px-3 py-1 bg-anthropic-taupe/10 text-anthropic-taupe rounded-full text-xs font-medium">
                          {isEnglish ? post.categoryEn : post.category}
                        </span>
                        <span className="text-sm text-anthropic-taupe/70">
                          {formatDate(post.date)}
                        </span>
                        <span className="text-sm text-anthropic-taupe/70">
                          · {isEnglish ? post.readingTimeEn : post.readingTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-anthropic-charcoal mb-2 group-hover:text-anthropic-terracotta transition-colors">
                        {isEnglish ? post.titleEn : post.title}
                      </h3>

                      <p className="text-anthropic-taupe line-clamp-2">
                        {isEnglish ? post.excerptEn : post.excerpt}
                      </p>

                      {post.readMoreUrl && (
                        <motion.a
                          href={post.readMoreUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 text-anthropic-terracotta font-medium mt-4"
                          whileHover={{ x: 5 }}
                        >
                          {t('blog.readMore')}
                          <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform" />
                        </motion.a>
                      )}
                    </div>

                    {/* Arrow */}
                    {post.readMoreUrl && (
                      <motion.div
                        className="hidden md:flex items-center justify-center w-12 h-12 rounded-full border border-anthropic-taupe/20 text-anthropic-taupe group-hover:border-anthropic-terracotta group-hover:text-anthropic-terracotta transition-colors"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
                      >
                        <ArrowRight size={18} />
                      </motion.div>
                    )}
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default BlogPage;
