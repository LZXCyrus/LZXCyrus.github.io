/**
 * 博客文章数据
 */

// 博客文章接口定义
export interface BlogPost {
  id: string;
  title: string;
  titleEn: string;
  date: string;
  category: string;
  categoryEn: string;
  excerpt: string;
  excerptEn: string;
  content?: string;
  contentEn?: string;
  readMoreUrl?: string;
  featured: boolean;
  readingTime: string;
  readingTimeEn: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'QwQ-32b 8bit量化部署教程（vLLM | 缓解复读）',
    titleEn: 'QwQ-32b 8-bit Quantization Deployment Tutorial (vLLM | Alleviate Repetition)',
    date: '2025-07-21',
    category: '大模型',
    categoryEn: 'LLM',
    excerpt: '本文记录 QwQ-32b 8bit量化模型使用vLLM推理进行部署的详细方法。',
    excerptEn: 'This article documents the detailed method of deploying the QWQ-32b 8-bit quantization model using vLLM inference.',
    readMoreUrl: 'https://blog.csdn.net/m0_65814643/article/details/146072906',
    featured: true,
    readingTime: '8 分钟阅读',
    readingTimeEn: '8 min read'
  },
  {
    id: '2',
    title: 'vLLM多卡推理踩坑记录',
    titleEn: 'vLLM Multi-GPU Inference Troubleshooting Notes',
    date: '2024-12-10',
    category: '大模型',
    categoryEn: 'LLM',
    excerpt: '主要记录vLLM在多卡推理时遇到的问题与解决办法。',
    excerptEn: 'Mainly records the problems and solutions encountered during multi-GPU inference with vLLM.',
    readMoreUrl: 'https://blog.csdn.net/m0_65814643/article/details/144110567',
    featured: true,
    readingTime: '6 分钟阅读',
    readingTimeEn: '6 min read'
  },
  {
    id: '3',
    title: 'vLLM如何指定GPU单卡离线推理',
    titleEn: 'How to Specify a Single GPU for Offline Inference with vLLM',
    date: '2024-11-28',
    category: '大模型',
    categoryEn: 'LLM',
    excerpt: '主要记录vLLM指定GPU单卡/多卡离线推理的方法。',
    excerptEn: 'This article mainly records the methods for specifying single/multi-GPU offline inference with vLLM.',
    readMoreUrl: 'https://blog.csdn.net/m0_65814643/article/details/143882882',
    featured: false,
    readingTime: '4 分钟阅读',
    readingTimeEn: '4 min read'
  },
  {
    id: '4',
    title: 'vscode+ssh远程配置python环境方法',
    titleEn: 'VSCode + SSH Remote Configuration for Python Environments',
    date: '2024-11-18',
    category: '编程',
    categoryEn: 'Programming',
    excerpt: '这篇文章主要记录vscode+ssh远程管理python环境的方法。',
    excerptEn: 'This article mainly documents the method for remotely managing Python environments using VSCode with SSH.',
    readMoreUrl: 'https://blog.csdn.net/m0_65814643/article/details/143801872',
    featured: false,
    readingTime: '10 分钟阅读',
    readingTimeEn: '10 min read'
  },
  {
    id: '5',
    title: 'Conda虚拟环境配置+Pycharm使用pytorch-gpu环境（Windows）',
    titleEn: 'Conda Virtual Environment Configuration + PyCharm Setup for PyTorch-GPU (Windows)',
    date: '2024-11-17',
    category: '编程',
    categoryEn: 'Programming',
    excerpt: '本文指导了如何在Windows上使用Conda创建虚拟环境，以实现互不干扰的开发环境配置。',
    excerptEn: 'This article provides detailed guidance on creating a virtual environment with Conda on Windows, and configuring the Python interpreter in PyCharm to achieve isolated development environments.',
    readMoreUrl: 'https://blog.csdn.net/m0_65814643/article/details/134510135',
    featured: false,
    readingTime: '15 分钟阅读',
    readingTimeEn: '15 min read'
  },
  {
    id: '6',
    title: 'OWKRL：2024年的视觉推理任务不用VLMs还可以怎么做',
    titleEn: 'OWKRL: Alternatives to VLMs for Visual Reasoning Tasks in 2024',
    date: '2024-10-17',
    category: '论文阅读',
    categoryEn: 'Paper Reading',
    excerpt: '本文介绍了一种名为开放世界知识表示学习 (OWKRL) 的新型方法，用于解决基于知识的视觉推理任务中的两个主要问题。',
    excerptEn: 'This paper introduces a novel approach called Open-World Knowledge Representation Learning (OWKRL), designed to address two major challenges in knowledge-based visual reasoning tasks.',
    readMoreUrl: 'https://blog.csdn.net/m0_65814643/article/details/142790813',
    featured: false,
    readingTime: '15 分钟阅读',
    readingTimeEn: '15 min read'
  }
];
