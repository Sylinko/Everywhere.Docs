<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# 从 Anthropic Claude 获取 API Key

本教程将一步步指导您如何获取[Anthropic Claude](https://www.anthropic.com/)的API密钥。

::: warning
Anthropic Claude 目前仅支持部分国家和地区的手机号注册，若您所在地区不受支持，建议使用其他模型提供商。
:::

## 准备

- 一个[受支持地区](https://www.anthropic.com/supported-countries)的手机号

## 步骤

- 访问[Claude Console](https://console.anthropic.com/login)，并登录账户。

<HorizontalCenterImg
    src="/model-provider/anthropic/login.webp"
    alt="Login"
    width="500px"
  />

- 登录后，在页面左方点击`API keys`。

<HorizontalCenterImg
    src="/model-provider/anthropic/api-key.webp"
    alt="API keys 页面"
  />

- 在页面右侧点击`Create Key`以创建 API 密钥，在下方输入框填写密钥的名称以帮您记住它的用途。

<HorizontalCenterImg
    src="/model-provider/anthropic/create-api-key.webp"
    alt="创建 API 密钥"
    width="400px"
  />

- 点击`Add`创建后，会显示您的 API 密钥，复制到 Everywhere 继续。

<HorizontalCenterImg
    src="/model-provider/anthropic/save-api-key.webp"
    alt="保存 API 密钥"
    width="400px"
  />

::: warning
请务必将 API 密钥妥善保存，因为它只会显示一次。如果您不小心关闭了对话框，可以在 API 密钥页面重新生成一个新的密钥，并删除您忘记保存的旧密钥。
:::

::: danger
请注意，API 密钥是敏感信息，请不要将其泄露给任何人或在公共场合分享。
:::