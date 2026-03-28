/**
 * 主应用组件
 * 包含路由配置和页面切换动画
 */
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, type Variants } from 'framer-motion';
import { Suspense, lazy } from 'react';

// 导入 i18n 配置
import './i18n';

// 导入组件
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// 懒加载页面组件
const HomePage = lazy(() => import('./pages/HomePage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));

// 页面切换动画配置
const pageVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1] as [number, number, number, number],
    },
  },
};

// 加载器组件
const PageLoader = () => (
  <div className="min-h-screen bg-anthropic-cream flex items-center justify-center">
    <motion.div
      className="flex flex-col items-center gap-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.div
        className="w-12 h-12 border-4 border-anthropic-terracotta border-t-transparent rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
      />
      <motion.p
        className="text-anthropic-taupe text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        Loading...
      </motion.p>
    </motion.div>
  </div>
);

// 页面包装组件
const AnimatedPage = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    variants={pageVariants}
    initial="initial"
    animate="animate"
    exit="exit"
  >
    {children}
  </motion.div>
);

// 主内容区域组件
const MainContent = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <HomePage />
            </AnimatedPage>
          }
        />
        <Route
          path="/projects"
          element={
            <AnimatedPage>
              <ProjectsPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/projects/:id"
          element={
            <AnimatedPage>
              <ProjectDetailPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/about"
          element={
            <AnimatedPage>
              <AboutPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/blog"
          element={
            <AnimatedPage>
              <BlogPage />
            </AnimatedPage>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

// App 主组件
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-anthropic-cream flex flex-col">
        <Navbar />
        <main className="flex-grow pt-16">
          <Suspense fallback={<PageLoader />}>
            <MainContent />
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
