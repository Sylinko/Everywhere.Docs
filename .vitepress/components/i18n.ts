/* This file is only resposible for COMPONENTS i18n */

export const pairs = {
  // Home
  'Core Members': '核心成员',
  'Lead Developer': '核心开发',
  'Product Operations': '产品运营',
  'Full Stack Developer': '全栈开发',
  'Supported Models': '主流大模型支持',
  'Sponsors': '赞助方',
  'The development is guided by 2 drop-out students.': '项目主要由两名辍学生开发。',
  'Our campus is the world; our vision is to be Everywhere.': '世界就是我们的校园，我们的愿景无处不在。',
  'In the wild': '真实场景',
  'AI Without Boundaries': 'AI 无界应用',
  'Liberating AI from browser and standalone apps, making it a ubiquitous, native capability of your operating system.': '将 AI 从浏览器和独立应用中解放出来，使其成为您操作系统中无处不在的原生能力。',
  'Scenario': '场景',
  'Instant In-Page Summaries': '页内提要，一目了然',
  'Grasp key points, terms, and insights on any page without switching context.': '无需切换上下文，在当前页面即可呈现关键点、术语和相关条目。',
  'Real-Time Market Insights on Charts': '盘中资讯，图上速览',
  'Pull earnings, news, and core metrics directly onto stock charts for faster, more informed decisions.': '无需离开图表，即时查询财报、新闻与核心指标，辅助交易决策。',
  'This does not constitute investment advice': 'AI 生成内容不构成投资建议',
  'Natural Language System Commands': '自然语言，高效执行系统命令',
  'Invoke your system\'s shell, see live output, and handle permission elevations. Manage services, free up ports, clear caches, and run scripts—all with natural language.': '调用系统 Shell，实时展示输出，处理权限提升。用自然语言管理服务、释放端口、清理缓存、运行脚本等。',
  'Instant Error Diagnosis': '即时错误诊断与分析',
  'Capture context from error, identify the cause, and get suggested commands and solutions to resolve it.': '捕获错误，定位原因，提供修复建议、备用方案和参考资料。',
  // Download
  'Download Everywhere': '下载 Everywhere',
  'Choose your platform': '选择适合您的平台',
  'Changelog': '更新日志',
  'Download': '立即下载',
  'Coming Soon': '敬请期待',
}

import { useData } from 'vitepress'

export const langMap: Record<string, Record<string, string>> = {
  'zh-CN': pairs,
}

export function useTranslate(lang?: string) {
  return (key: string) => t(key, lang || useData().lang.value)
}

export function t(key: string, lang: string) {
  return langMap[lang]?.[key] || key;
}

export function createTranslate(lang: string) {
  return (key: string) => t(key, lang);
}

export function getCurrentLang() {
  return useData().lang.value;
}