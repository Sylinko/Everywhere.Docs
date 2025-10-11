<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# 从 DeepSeek 获取 API Key

本教程将一步步指导您如何获取[DeepSeek](https://www.deepseek.com)的API密钥。

## 步骤

- 访问[DeepSeek 开放平台](https://platform.deepseek.com/)，并注册&登录账户。
- 登录后，访问页面左方侧边栏的**API keys**

<HorizontalCenterImg
    src="/model-provider/deepseek/platform-api-keys.webp"
    alt="API keys 页面"
  />

- 点击**创建 API key**按钮将会弹出一个对话框，用于输入该 API key 的名称，用于帮您记住它的用途。

<HorizontalCenterImg
    src="/model-provider/deepseek/platform-create-api-key.webp"
    alt="创建 API key"
    width="400px"
  />

- 点击**创建**按钮，成功后会显示您的 API 密钥。将此密钥复制到 Everywhere 继续。

<HorizontalCenterImg
    src="/model-provider/deepseek/platform-generate-api-key.webp"
    alt="生成 API key"
    width="400px"
  />

::: warning
请务必将 API 密钥妥善保存，因为它只会显示一次。如果您不小心关闭了对话框，可以在 API 密钥页面重新生成一个新的密钥，并删除您忘记保存的旧密钥。
:::

::: danger
请注意，API 密钥是敏感信息，请不要将其泄露给任何人或在公共场合分享。
:::

## 常见问题

### 为什么在添加 DeepSeek API Key (验证有效性) 时会收到 `PaymentRequired` 错误？

如果您在 Everywhere 中添加 DeepSeek API 密钥时遇到 `HTTP 请求错误(PaymentRequired): 未知错误，请稍后再试。`，这通常意味着您的 DeepSeek 账户余额不足。您需要前往 DeepSeek 平台为您的账户充值后才能继续使用该 API。