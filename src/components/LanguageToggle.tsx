/**
 * 语言切换按钮组件
 * 支持中英文实时切换
 */
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n, t } = useTranslation();
  const isEnglish = i18n.language === 'en';

  const toggleLanguage = () => {
    i18n.changeLanguage(isEnglish ? 'zh' : 'en');
  };

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative px-4 py-2 text-sm font-medium text-anthropic-taupe
                 border border-anthropic-taupe/30 rounded-full overflow-hidden
                 hover:bg-anthropic-taupe/10 transition-colors duration-300"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <motion.span
        key={isEnglish ? 'en' : 'zh'}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.2 }}
      >
        {t('language.toggle')}
      </motion.span>
    </motion.button>
  );
};

export default LanguageToggle;
