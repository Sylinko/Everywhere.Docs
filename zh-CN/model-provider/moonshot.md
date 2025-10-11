<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# 从 Moonshot (Kimi) 获取 API Key

本教程将一步步指导您如何获取[Moonshot (Kimi)](https://moonshot.kimi.ai)的API密钥。

## 步骤

- 访问[Moonshot 开放工作台](https://platform.moonshot.cn/playground)，并注册&登录账户。
- 登录后，点击左上角的首页图例，弹出侧边栏

<HorizontalCenterImg
    src="/model-provider/moonshot/playground.webp"
    alt="Playground 页面"
  />

- 访问左方侧边栏的**API Key**页面

<HorizontalCenterImg
    src="/model-provider/moonshot/playground-api-key.webp"
    alt="进入 API Key 页面"
    width="200px"
  />

- 点击页面右上方的**创建 API Key**按钮将会弹出一个对话框：
  - 在上方输入栏中输入您想要的 API Key 名称，以便于记住它的用途。
  - 下方选择 API Key 的所属项目，对于新账户来说，通常是`default`

<HorizontalCenterImg
    src="/model-provider/moonshot/create-api-key.webp"
    alt="创建 API Key"
  />

- 点击**确定**按钮，成功后会显示您的 API 密钥。将此密钥复制到 Everywhere 继续。

<HorizontalCenterImg
    src="/model-provider/moonshot/generate-api-key.webp"
    alt="生成 API Key"
    width="500px"
  />

::: warning
请务必将 API 密钥妥善保存，因为它只会显示一次。如果您不小心关闭了对话框，可以在 API 密钥页面重新生成一个新的密钥，并删除您忘记保存的旧密钥。
:::

::: danger
请注意，API 密钥是敏感信息，请不要将其泄露给任何人或在公共场合分享。
:::