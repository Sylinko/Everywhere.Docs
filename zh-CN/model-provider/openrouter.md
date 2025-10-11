<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# 从 OpenRouter 获取 API Key

本教程将一步步指导您如何获取[OpenRouter](https://openrouter.ai/)的API密钥。

::: tip
OpenRouter 有免费模型可用，注册账户后即可使用。
:::

## 步骤

- 在[OpenRouter](https://openrouter.ai/)官网右上角点击`Sign in`登录账户。如果没有账户，请先注册一个新账户。

<HorizontalCenterImg
    src="/model-provider/openrouter/login.webp"
    alt="登录"
    width="400px"
  />

- 登录后，访问[API 密钥页面](https://openrouter.ai/settings/keys)。

<HorizontalCenterImg
    src="/model-provider/openrouter/api-key.webp"
    alt="API 密钥页面"
  />

- 在该页面的右上方，点击`Create API Key`，在弹出的对话框上方填入密钥名称以帮助您记住它的用途，下方的额度限制 *(Credit Limit)* 是可选的，可以留空。

<HorizontalCenterImg
    src="/model-provider/openrouter/create-api-key.webp"
    alt="新建 API 密钥"
    width="400px"
  />

- 点击`Create`后，新的对话框会显示您获取到的 API 密钥，复制该密钥到 Everywhere 继续。

<HorizontalCenterImg
    src="/model-provider/openrouter/get-api-key.webp"
    alt="复制 API 密钥"
    width="400px"
  />

::: warning
请务必将 API 密钥妥善保存，因为它只会显示一次。如果您不小心关闭了对话框，可以在 API 密钥页面重新生成一个新的密钥，并删除您忘记保存的旧密钥。
:::

::: danger
请注意，API 密钥是敏感信息，请不要将其泄露给任何人或在公共场合分享。
:::