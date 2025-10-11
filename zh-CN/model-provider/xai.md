<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# 从 xAI (Grok) 获取 API Key

本教程将一步步指导您如何获取[xAI (Grok)](https://x.ai)的API密钥。

::: warning
xAI 目前仅支持部分国家和地区访问，若您所在地区不受支持，建议使用其他模型提供商。
:::

## 准备

- 在[xAI 控制台](https://console.x.ai)注册并登录账户

## 步骤

- 登录后，访问页面左方侧边栏的**API Keys**并点击页面右上方的**Create API key**按钮

<HorizontalCenterImg
    src="/model-provider/xai/api-key-page.webp"
    alt="API Keys 页面"
  />

- **Create API key**页面中，在**Name**输入框内输入一个描述性的名称（例如：`Everywhere`），然后点击下方的**Create API key**按钮

<HorizontalCenterImg
    src="/model-provider/xai/create-api-key-form.webp"
    alt="创建 API key"
    width="600px"
  />

- 成功创建后，您将看到一个 API 密钥，将该密钥复制到 Everywhere 内继续即可。

<HorizontalCenterImg
    src="/model-provider/xai/get-api-key.webp"
    alt="获取 API key"
    width="600px"
  />

::: warning
请务必将 API 密钥妥善保存，因为它只会显示一次。如果您不小心跳转回 API 密钥页面，可以跟随教程重新生成一个新的密钥，并删除您忘记保存的旧密钥。
:::

::: danger
请注意，API 密钥是敏感信息，请不要将其泄露给任何人或在公共场合分享。
:::