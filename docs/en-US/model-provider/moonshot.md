<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# Getting an API Key from Moonshot (Kimi)

This tutorial will guide you step-by-step on how to get an API key for [Moonshot (Kimi)](https://moonshot.kimi.ai).

## Steps

- Go to the [Moonshot Open Platform](https://platform.moonshot.cn/playground) and register & log in to your account.
- After logging in, click the icon in the top-left corner to bring up the sidebar.

<HorizontalCenterImg
    src="/model-provider/moonshot/playground.webp"
    alt="Playground page"
  />

- Access the **API Key** page from the sidebar on the left.

<HorizontalCenterImg
    src="/model-provider/moonshot/playground-api-key.webp"
    alt="Entering the API Key page"
    width="200px"
  />

- Click the **创建 API Key** button in the top-right corner of the page. A dialog box will pop up:
- Enter a name for your API key in the top input field to help you remember its purpose.
- Below, select the project for the API key. For new accounts, this is usually `default`.

<HorizontalCenterImg
    src="/model-provider/moonshot/create-api-key.webp"
    alt="Creating an API Key"
  />

- Click the **确定** button, and your API key will be displayed. Copy this key.

<HorizontalCenterImg
    src="/model-provider/moonshot/generate-api-key.webp"
    alt="Generating an API Key"
    width="500px"
  />

::: warning
Please be sure to save your API key properly, as it will only be displayed once. If you accidentally close the dialog box, you can generate a new key on the API keys page and delete the old key that you forgot to save.
:::

::: danger
Please note that the API key is sensitive information. Do not disclose it to anyone or share it in public.
:::