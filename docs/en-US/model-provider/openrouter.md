<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# Getting an API Key from OpenRouter

This tutorial will guide you step-by-step on how to get an API key for [OpenRouter](https://openrouter.ai/).

::: tip
OpenRouter offers free models that can be used after registering an account.
:::

## Steps

- Log in to your [OpenRouter](https://openrouter.ai/) account by clicking `Sign in` in the top right corner. If you don't have an account, please register for a new one.

<HorizontalCenterImg
    src="/model-provider/openrouter/login.webp"
    alt="Login"
    width="400px"
  />

- After logging in, go to the [API Keys page](https://openrouter.ai/settings/keys).

<HorizontalCenterImg
    src="/model-provider/openrouter/api-key.webp"
    alt="API Keys page"
  />

- After that, click `Create API Key`, fill in the key name at the top of the pop-up dialog to help you remember its purpose, and the Credit Limit below is optional and can be left blank.

<HorizontalCenterImg
    src="/model-provider/openrouter/create-api-key.webp"
    alt="Create API Key"
    width="400px"
  />

- After clicking `Create`, a new dialog will display your API key. Copy this key to use it in Everywhere.

<HorizontalCenterImg
    src="/model-provider/openrouter/get-api-key.webp"
    alt="Copy API Key"
    width="400px"
  />

::: warning
Please be sure to save your API key properly, as it will only be displayed once. If you accidentally close the dialog box, you can generate a new key on the API keys page and delete the old key that you forgot to save.
:::

::: danger
Please note that the API key is sensitive information. Do not disclose it to anyone or share it in public.
:::