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

### 准备

- 一个谷歌账户
- 如果您已经在 Google Cloud 创建过项目，可以直接使用现有项目

### 步骤

- 访问[Google Cloud Console](https://console.cloud.google.com/)，并登录账户。
- 登录后，在页面左上方找到当前的默认项目，通常是*My First Project*，点击弹出**项目选择器**。

<HorizontalCenterImg
    src="/plugins/web-search/project-manager.webp"
    alt="项目选择器"
    width="600px"
  />

- 在项目选择器中，点击右上角的**New project**按钮，您将会跳转到一个新页面。在此处，您可以随意填上项目名称，无归属组织。

<HorizontalCenterImg
    src="/plugins/web-search/create-project.webp"
    alt="创建项目"
    width="500px"
  />

- 成功创建后，前往[可编程搜索引擎控制台](https://programmablesearchengine.google.com/controlpanel/all)，点击右上角的**Add**按钮。

<HorizontalCenterImg
    src="/plugins/web-search/create-new-search-engine.webp"
    alt="创建搜索引擎"
    width="500px"
  />

- 在表单中，在 **Name your search engine** 的输入框中填入方便记忆的名称，将**What to search?** 选为 **Search the entire web**，其他设置项保持默认。通过人机验证后，点击**Create**。

<HorizontalCenterImg
    src="/plugins/web-search/new-search-engine-form.webp"
    alt="配置搜索引擎"
    width="500px"
  />

- 之后提示创建成功，点击**Customize**进入管理页面。

<HorizontalCenterImg
    src="/plugins/web-search/create-new-search-engine-success.webp"
    alt="创建成功"
    width="500px"
  />

- 在**Basic**卡片中，找到**Search engine ID**，复制该 ID 至 Everywhere 的**搜索引擎 ID**配置项中。

<HorizontalCenterImg
    src="/plugins/web-search/get-search-engine-id.webp"
    alt="搜索引擎 ID"
    width="500px"
  />

- 之后访问[Custom Search JSON API 指南](https://developers.google.com/custom-search/v1/overview)，找到**API key**部分，点击**Get a Key**。

<HorizontalCenterImg
    src="/plugins/web-search/get-api-key.webp"
    alt="API key"
    width="500px"
  />

- 在弹出的页面中，选择先前创建的项目，点击**NEXT**。

<HorizontalCenterImg
    src="/plugins/web-search/get-api-key-enable.webp"
    alt="选择项目"
    width="500px"
  />

- 点击**CONFIRM AND CONTINUE**以确认在您的项目中启用 Custom Search API。

<HorizontalCenterImg
    src="/plugins/web-search/get-api-key-confirm.webp"
    alt="确认启用"
    width="500px"
  />

- 成功启用后，点击**SHOW KEY**，您将会看到 API key，复制该 key 至 Everywhere 的**API 密钥**配置项中，即可使用 Google 的搜索服务。

::: warning
请务必将 API 密钥妥善保存，因为它只会显示一次（如果可以的话，搜索引擎 ID 也可以额外保存一份以便日后使用）。如果您不小心关闭了对话框，可以再次点击**Get a Key**按照流程重新生成一个新的密钥。
:::

::: danger
请注意，API 密钥是敏感信息，请不要将其泄露给任何人或在公共场合分享。
:::