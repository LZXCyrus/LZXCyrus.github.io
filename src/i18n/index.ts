/**
 * i18n 国际化配置文件
 * 支持中英文双语实时切换
 */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// 英文翻译
const en = {
  translation: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      about: 'About',
      blog: 'Blog',
      navigation: 'Navigation'
    },
    hero: {
      greeting: 'Hello, I\'m',
      name: 'Zhixi Li',
      title: 'Financial Intelligence & Data Science',
      description: 'I am a recent Master\'s student based in Chengdu, focusing on financial intelligence in the stock market, data mining and AI agent research.',
      cta: 'View My Work',
      scroll: 'Scroll to explore'
    },
    projects: {
      title: 'Selected Projects',
      subtitle: 'A collection of work from my personal study and practice.',
      viewDetails: 'View Details',
      viewLive: 'Live Demo',
      viewGithub: 'GitHub',
      tech: 'Technologies'
    },
    projectDetail: {
      title: 'Projects',
      back: 'Back to Projects',
      description: 'Description',
      technologies: 'Technologies Used',
      links: 'Project Links',
      timeline: 'Timeline'
    },
    about: {
      title: 'About Me',
      subtitle: 'Get to know me better',
      bio: 'I am a Master\'s student with experience in financial data analysis, algorithm modeling and practical model development. My research focuses on financial intelligence, data mining and intelligent agents.',
      skills: 'Skills & Expertise',
      experience: 'Research Experience',
      education: 'Education',
      contact: 'Get In Touch',
      email: 'Email',
      location: 'Location'
    },
    blog: {
      title: 'Technical Blog',
      subtitle: 'Thoughts and insights from my journey in tech, plus some other stuff.',
      readMore: 'Read More',
      noArticles: 'No articles yet. Check back soon!',
      categories: 'Categories'
    },
    footer: {
      rights: 'All rights reserved.',
      madeWith: 'Made with passion and code.',
      followMe: 'Follow Me'
    },
    language: {
      toggle: '中文'
    }
  }
};

// 中文翻译
const zh = {
  translation: {
    nav: {
      home: '首页',
      projects: '项目',
      about: '关于',
      blog: '博客',
      navigation: '导航'
    },
    hero: {
      greeting: '你好，我是',
      name: '李之熹',
      title: '金融智能 & 数据科学',
      description: '西南财经大学在读研究生，主要方向为金融智能与股票市场分析，涉及数据挖掘、智能体等相关研究。',
      cta: '查看作品',
      scroll: '向下滚动探索'
    },
    projects: {
      title: '精选项目',
      subtitle: '记录个人学习与实践的精选项目。',
      viewDetails: '查看详情',
      viewLive: '在线演示',
      viewGithub: 'GitHub',
      tech: '技术栈'
    },
    projectDetail: {
      title: '项目列表',
      back: '返回项目列表',
      description: '项目描述',
      technologies: '使用的技术',
      links: '项目链接',
      timeline: '时间线'
    },
    about: {
      title: '关于我',
      subtitle: '了解更多关于我的故事',
      bio: '我是一名金融智能与信息管理方向的在读研究生，具备金融数据分析、智能算法建模与模型实践经验，专注于金融智能、数据挖掘及智能体相关研究。',
      skills: '技能与专长',
      experience: '科研经验',
      education: '教育背景',
      contact: '联系我',
      email: '邮箱',
      location: '所在地'
    },
    blog: {
      title: '技术博客',
      subtitle: '分享我在技术道路上的思考与见解，还有其他有的没的。',
      readMore: '阅读全文',
      noArticles: '暂无文章，敬请期待！',
      categories: '分类'
    },
    footer: {
      rights: '版权所有。',
      madeWith: '用热爱与代码制作。',
      followMe: '关注我'
    },
    language: {
      toggle: 'EN'
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      zh
    },
    lng: 'en', // 默认语言
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
