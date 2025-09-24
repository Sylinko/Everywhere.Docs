/* This file is only resposible for COMPONENTS i18n */

export const pairs = {
  'Core Members': '核心成员',
  'Lead Developer': '核心开发',
  'Product Operations': '产品运营',
  'Full Stack Developer': '全栈开发',
  'Supported Models': '主流大模型支持',
  'The development is guided by 2 drop-out students.': '项目主要由两名辍学生开发。',
  'Our campus is the world; our vision is to be Everywhere.': '世界就是我们的校园，我们的愿景无处不在。',
}

import { useData } from 'vitepress'

export const langMap: Record<string, Record<string, string>> = {
  'zh-CN': pairs,
}

export function useTranslate(lang?: string) {
  console.log(useData().lang.value)
  return (key: string) => t(key, lang || useData().lang.value)
}

export function t(key: string, lang: string) {
  return langMap[lang]?.[key] || key;
}

export function createTranslate(lang: string) {
  return (key: string) => t(key, lang);
}