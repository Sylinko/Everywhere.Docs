<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# 从 Google Gemini 获取 API Key

本教程将一步步指导您如何获取[Google Gemini](https://cloud.google.com/gemini)的API密钥。

::: warning
本教程将会从 Google Cloud 出发，而非直接在 AI Studio 创建新的 API 密钥。
:::

## 准备

- 一个谷歌账户

## 步骤

- 访问[Google Cloud Console](https://console.cloud.google.com/)，并登录账户。
- 登录后，在页面左上方找到当前的默认项目，通常是*My First Project*，点击弹出**项目选择器**。

<HorizontalCenterImg
    src="/model-provider/google-gemini/project-manager.webp"
    alt="Project Manager"
    width="600px"
  />

- 在项目选择器中，点击右上角的**New project**按钮，您将会跳转到一个新页面。在此处，您可以随意填上项目名称，无归属组织。

<HorizontalCenterImg
    src="/model-provider/google-gemini/create-project.webp"
    alt="Create project"
    width="500px"
  />

- 成功创建后，访问[Google AI Studio](https://aistudio.google.com/app/apikey)，并登录账户。
- 登录后，在页面右上方找到**Create API Key**按钮，点击后，在弹出的窗口内，选择我们刚刚的项目：

<HorizontalCenterImg
    src="/model-provider/google-gemini/create-api-key-project-selection.webp"
    alt="Create API Key - Project Selection"
    width="400px"
  />

- 点击**Create API Key in existing project**，创建成功后会显示您的 API 密钥。将此密钥复制到 Everywhere 继续。

<HorizontalCenterImg
    src="/model-provider/google-gemini/api-key.webp"
    alt="API Key"
    width="600px"
  />

::: warning
请务必将 API 密钥妥善保存，因为它只会显示一次。如果您不小心关闭了对话框，可以在 API 密钥页面重新生成一个新的密钥，并删除您忘记保存的旧密钥。
:::

::: danger
请注意，API 密钥是敏感信息，请不要将其泄露给任何人或在公共场合分享。
:::