<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# Get API Key from xAI (Grok)

This tutorial will guide you step-by-step on how to obtain an API key from [xAI (Grok)](https://x.ai).

## Preparation

- Register and log in to your account on the [xAI Console](https://console.x.ai).

## Steps

- After logging in, go to the **API Keys** in the left sidebar and click the **Create API key** button in the upper right corner of the page.

<HorizontalCenterImg
    src="/model-provider/xai/api-key-page.webp"
    alt="API Keys Page"
  />

- On the **Create API key** page, enter a descriptive name in the **Name** input box (e.g., `Everywhere`), and then click the **Create API key** button below.

<HorizontalCenterImg
    src="/model-provider/xai/create-api-key-form.webp"
    alt="Create API key"
    width="600px"
  />

- After successful creation, you will see an API key. Copy this key into Everywhere to continue.

<HorizontalCenterImg
    src="/model-provider/xai/get-api-key.webp"
    alt="Get API key"
    width="600px"
  />

::: warning
Please be sure to save the API key properly, as it will only be displayed once. If you accidentally navigate back to the API keys page, you can follow the tutorial to generate a new key and delete the old one you forgot to save.
:::

::: danger
Please note that the API key is sensitive information. Do not disclose it to anyone or share it in public.
:::