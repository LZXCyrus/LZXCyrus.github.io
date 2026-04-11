/**
 * 项目数据
 */

// 项目接口定义
export interface Project {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  descriptionEn: string;
  longDescription: string;
  longDescriptionEn: string;
  image: string;
  technologies: string[];
  techIcons?: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  year: string;
  role: string;
  roleEn: string;
}

export const projects: Project[] = [
  {
    id: '1',
    title: '易述',
    titleEn: 'EasyRef',
    description: '基于原生Swufe Agent开发的一站式Al文献管理平台。',
    descriptionEn: 'One-stop AI Literature Management Platform Developed Based on Native Swufe Agent.',
    longDescription: '易述是基于原生 Swufe Agent 开发的 AI 论文文献管家，一站式整合文献管理、智能检索、综述生成、智能问答等核心功能。用户可通过自然语言精准搜索论文，一键获取结构清晰、引用规范合规的专业文献综述；支持思维导图可视化、划词翻译、论文深度问答及播客式音频解读。',
    longDescriptionEn: 'EasyRef is an AI literature manager for academic papers developed on the native Swufe Agent. It integrates core functions such as one-stop literature management, intelligent retrieval, review generation and intelligent Q&A. Users can search papers accurately via natural language, and obtain professional literature reviews with clear structure and standardized citations in one click. It also supports mind map visualization, word selection translation, in-depth paper Q&A and podcast-style audio interpretation.',
    image: '/images/project1.jpg',
    technologies: [' Python', ' MySQL', ' PostgreSQL', ' FastAPI ', ' Swufe Agent'],
    featured: true,
    year: '2026',
    role: '团队成员',
    roleEn: 'Team Member',
    liveUrl: ' https://agent.swufe.edu.cn/agent/823',
    githubUrl: ' https://github.com/JinHanLei/EasyRef'
  },
  {
    id: '2',
    title: 'AIMOOC',
    titleEn: 'AIMOOC',
    description: '基于蓝心大模型的AI互动式学习与授课平台。',
    descriptionEn: 'AI interactive learning and teaching platform based on Lanxin Large Model.',
    longDescription: 'AIMOOC 是基于蓝心多模态大模型的交互式学习平台。学生端实现 AI 视频解析、实时问答、自适应出题与个性化学习，覆盖全学习流程，弥补传统教育平台智能化不足。平台同步配备教师端，支持教案、PPT、自动出题及学生、作业管理。',
    longDescriptionEn: 'AIMOOC is an interactive learning platform powered by Lanxin Multimodal Large Model. The student side enables AI video analysis, real-time Q&A, adaptive test generation and personalized learning, covering the entire learning process and addressing the lack of intelligence in traditional education platforms. The platform is also equipped with a teacher side, supporting lesson plan creation, PPT generation, automatic test generation, as well as student and assignment management.',
    image: '/images/project2.jpg',
    technologies: [' Python', ' PEFT', 'PostgreSQL', 'BlueLM', ' FastAPI'],
    featured: true,
    year: '2025',
    role: '团队成员',
    roleEn: 'Team Member',
    liveUrl: 'https://github.com/JinHanLei/AIMOOC',
    githubUrl: 'https://github.com/JinHanLei/AIMOOC'
  },
  {
    id: '3',
    title: 'LiveMap - 音乐现场地图',
    titleEn: 'LiveMap',
    description: '演出信息记录管理应用，在地图上追踪你的现场音乐体验。',
    descriptionEn: 'A live event management app to track your live music experiences on a map.',
    longDescription: '一款专为现场音乐爱好者设计的演出信息管理工具。通过交互式地图展示演出位置，支持网格/列表两种布局浏览演出记录，按年份时间轴追溯音乐足迹，完整记录每个演出的艺人、场地、时间、标签等信息。',
    longDescriptionEn: 'A live event management tool designed for live music enthusiasts. Display演出位置 on an interactive map, browse events in grid/list layouts, trace your musical journey through a timeline by year, and keep complete records of artists, venues, dates, tags and more for each event.',
    image: '/images/project3.jpg',
    technologies: ['React 18','TypeScript','Vite','React Router','Zustand','Leaflet + React-Leaflet','sql.js','date-fns','Tauri'],
    featured: false,
    year: '2026',
    role: '设计师 & 开发者',
    roleEn: 'Designer & Developer',
    liveUrl: 'https://github.com/LZXCyrus/LiveMap',
    githubUrl: 'https://github.com/LZXCyrus/LiveMap'
  },
  {
    id: '4',
    title: '极简人文主义风格个人网站模板',
    titleEn: 'Personal Website Template of Humanist Minimalism Style',
    description: '展示项目和博客的极简人文主义风格个人网站。',
    descriptionEn: 'A personal website showcasing projects and blog of humanist minimalism style.',
    longDescription: '一个设计精美的极简人文主义风格的作品集个人网站，具有流畅的动画、响应式设计和简洁的用户界面。包括博客区、项目展示和联系表单。',
    longDescriptionEn: 'A beautifully designed minimalist humanistic style portfolio personal website featuring smooth animations, responsive design, and a clean user interface. Includes a blog section, project showcase, and contact form.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    featured: false,
    year: '2026',
    role: '设计师 & 开发者',
    roleEn: 'Designer & Developer',
    liveUrl: 'https://lzxcyrus.github.io',
    githubUrl: 'https://github.com/LZXCyrus/LZXCyrus-HomePage'
  },
  {
    id: '5',
    title: 'NKETool - 金融新闻知识提取工具',
    titleEn: 'NKETool (Financial News Knowledge Extraction Tool)',
    description: '一款面向金融文本的一站式智能分析工具。',
    descriptionEn: 'An all-in-one intelligent analysis tool designed for financial text.',
    longDescription: 'NKETool 是专为金融文本打造的一站式智能分析工具，基于深度学习模型（MT5）实现，聚焦金融财经文本的事件抽取、实体参数提取、情感倾向分析三大核心能力，无需复杂开发，一行代码即可完成金融文本深度解析，适配金融研报、新闻、公告等多场景文本处理。',
    longDescriptionEn: 'As a one-stop intelligent analysis tool built specifically for financial text, NKETool is implemented based on deep learning models (MT5). It focuses on three core capabilities for financial and economic text: event extraction, entity argument extraction, and sentiment analysis. Without complicated development, it enables in-depth parsing of financial text with just one line of code, and is suitable for processing financial research reports, news, announcements, and other scenarios.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    technologies: ['Python'],
    featured: true,
    year: '2024',
    role: '开发者',
    roleEn: 'Developer',
    liveUrl: ' https://github.com/LZXCyrus/NKETool',
    githubUrl: 'https://github.com/LZXCyrus/NKETool'
  }
];
