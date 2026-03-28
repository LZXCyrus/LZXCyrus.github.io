/**
 * 页脚组件
 */
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Github, Mail } from 'lucide-react';

// CSDN 图标组件
const CSDNIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h-2v-6h2v6zm4 0h-2v-6h2v6zm-2-8c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1z"/>
    <path d="M17.5 7.5c-.28 0-.5.22-.5.5v8c0 .28.22.5.5.5s.5-.22.5-.5v-8c0-.28-.22-.5-.5-.5z"/>
    <path d="M7.5 7.5c-.28 0-.5.22-.5.5v8c0 .28.22.5.5.5s.5-.22.5-.5v-8c0-.28-.22-.5-.5-.5z"/>
    <path d="M12 4C6.48 4 4 6.48 4 12s2.48 8 8 8 8-2.48 8-8-2.48-8-8-8zm0 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
  </svg>
);

// Instagram 图标组件
const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, url: 'https://github.com/LZXCyrus', label: 'GitHub' },
    { icon: CSDNIcon, url: 'https://blog.csdn.net/m0_65814643', label: 'CSDN' },
    { icon: InstagramIcon, url: 'https://instagram.com', label: 'Instagram' },
    { icon: Mail, url: 'mailto:lzxcyrus@126.com', label: 'Email' },
  ];

  const navLinks = [
    { key: 'home', path: '/' },
    { key: 'projects', path: '/projects' },
    { key: 'about', path: '/about' },
    { key: 'blog', path: '/blog' }
  ];

  return (
    <footer
      className="py-16 relative z-10 select-text"
      style={{ backgroundColor: '#2D2926' }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3
              className="text-2xl font-serif font-bold select-text"
              style={{ color: '#F5F0EB' }}
            >
              LZXCyrus
            </h3>
            <p
              className="text-sm leading-relaxed select-text"
              style={{ color: 'rgba(200, 195, 210, 0.7)' }}
            >
              {t('footer.madeWith')}
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4
              className="text-sm font-semibold uppercase tracking-wider select-text"
              style={{ color: 'rgba(200, 190, 220, 0.5)' }}
            >
              {t('nav.navigation')}
            </h4>
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.key}
                  to={link.path}
                  className="transition-colors w-fit select-text"
                  style={{ color: 'rgba(200, 195, 210, 0.7)' }}
                >
                  <motion.span
                    className="inline-block cursor-pointer select-text"
                    whileHover={{ x: 5, color: '#E8A090' }}
                    transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  >
                    {t(`nav.${link.key}`)}
                  </motion.span>
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4
              className="text-sm font-semibold uppercase tracking-wider select-text"
              style={{ color: 'rgba(200, 190, 220, 0.5)' }}
            >
              {t('footer.followMe')}
            </h4>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors cursor-pointer select-text"
                  style={{ color: 'rgba(200, 195, 210, 0.7)' }}
                  whileHover={{ scale: 1.2, rotate: 5, color: '#E8A090' }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div
          className="mt-12 pt-8 border-t text-center"
          style={{ borderColor: 'rgba(200, 190, 220, 0.1)' }}
        >
          <p
            className="text-sm select-text"
            style={{ color: 'rgba(200, 195, 210, 0.5)' }}
          >
            © {currentYear} LZXCyrus. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
