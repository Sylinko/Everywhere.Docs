<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# 从 OpenAI 获取 API Key

本教程将一步步指导您如何获取[OpenAI](https://openai.com)的API密钥。

::: warning
OpenAI 目前仅支持部分国家和地区访问，若您所在地区不受支持，建议使用其他模型提供商。
:::

## 准备

- 一个用于注册账户的有效电子邮件地址
- 一个用于账户安全验证的国际手机号码
- 如果需要享受 OpenAI API 的付费服务，您还需要一张有效的国际信用卡
- 如果您在中国大陆，请确保能访问 OpenAI 的服务

## 步骤

- 使用您准备的电子邮件地址和手机号码[注册 OpenAI 账户](https://platform.openai.com/signup)
- 登录后，访问[API 密钥页面](https://platform.openai.com/api-keys)，点击`"Create new secret key"`按钮

<HorizontalCenterImg
    src="/model-provider/openai/create-new-secret-key.webp"
    alt="Create new secret key"
    width="600px"
  />

- 在弹出的对话框中，推荐在`Name`输入框内输入一个描述性的名称（例如：`"Everywhere API Key"`），然后点击`"Create secret key"`按钮

<HorizontalCenterImg
    src="/model-provider/openai/create-new-secret-key-form.webp"
    alt="Create new secret key form"
    width="450px"
  />

- 成功创建后，您将看到一个 API 密钥，将该密钥复制到 Everywhere 内继续即可。

<HorizontalCenterImg
    src="/model-provider/openai/save-your-key.webp"
    alt="Save your key"
    width="450px"
  />

::: warning
请务必将 API 密钥妥善保存，因为它只会显示一次。如果您不小心关闭了对话框，可以在 API 密钥页面重新生成一个新的密钥，并删除您忘记保存的旧密钥。
:::

::: danger
请注意，API 密钥是敏感信息，请不要将其泄露给任何人或在公共场合分享。
:::