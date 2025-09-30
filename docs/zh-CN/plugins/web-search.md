<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# 网络搜索

Everywhere 支持通过网络搜索获取最新的信息。您可以选择使用 Google, Brave, Bing 或 Bocha 作为搜索引擎。

## 使用 Google

本教程将一步步指导您如何在 Everywhere 中使用[Google](https://cloud.google.com/gemini)作为网络搜索服务。

::: tip
Google 的 Custom Search JSON API 每天免费提供 100 次搜索查询（[详见开发者文档](https://developers.google.com/custom-search/v1/overview)）
:::

::: warning
Google 搜索服务目前仅支持部分国家和地区访问，若您所在地区不受支持，建议使用其他搜索服务。
:::

## 准备

- 一个谷歌账户
- 如果您已经在 Google Cloud 创建过项目，可以直接使用现有项目

## 步骤

- 访问[Google Cloud Console](https://console.cloud.google.com/)，并登录账户。
- 登录后，在页面左上方找到当前的默认项目，通常是*My First Project*，点击弹出**项目选择器**。

<HorizontalCenterImg
    src="/model-provider/google/project-manager.webp"
    alt="Project Manager"
    width="600px"
  />

- 在项目选择器中，点击右上角的**New project**按钮，您将会跳转到一个新页面。在此处，您可以随意填上项目名称，无归属组织。

<HorizontalCenterImg
    src="/model-provider/google/create-project.webp"
    alt="Create project"
    width="500px"
  />

- 成功创建后，