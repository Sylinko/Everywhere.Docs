<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# Getting an API Key from Anthropic Claude

This tutorial will guide you step-by-step on how to get an API key for [Anthropic Claude](https://www.anthropic.com/).

## Preparation

- A phone number from a [supported country](https://www.anthropic.com/supported-countries).

## Steps

- Go to the [Claude Console](https://console.anthropic.com/login) and log in to your account.

<HorizontalCenterImg
    src="/model-provider/anthropic/login.webp"
    alt="Login"
    width="500px"
  />

- After logging in, click on `API keys` in the left sidebar.

<HorizontalCenterImg
    src="/model-provider/anthropic/api-key.webp"
    alt="API keys page"
  />

- On the right side of the page, click `Create Key` to create an API key. In the input box below, enter a name for the key to help you remember its purpose.

<HorizontalCenterImg
    src="/model-provider/anthropic/create-api-key.webp"
    alt="Create API Key"
    width="400px"
  />

- Click `Add` to create the key, and your API key will be displayed. Copy it into Everywhere to proceed.

<HorizontalCenterImg
    src="/model-provider/anthropic/save-api-key.webp"
    alt="Save API Key"
    width="400px"
  />

::: warning
Please be sure to save your API key properly, as it will only be displayed once. If you accidentally close the dialog box, you can generate a new key on the API keys page and delete the old key that you forgot to save.
:::

::: danger
Please note that the API key is sensitive information. Do not disclose it to anyone or share it in public.
:::