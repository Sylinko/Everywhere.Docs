<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# Getting an API Key from OpenAI

This tutorial will guide you step-by-step on how to obtain an API key from [OpenAI](https://openai.com).

## Preparation

- A valid email address for account registration
- An international mobile phone number for account security verification
- If you need to use OpenAI API's paid services, you will also need a valid international credit card

## Steps

- [Register for an OpenAI account](https://platform.openai.com/signup) using your prepared email address and mobile number.
- After logging in, visit the [API keys page](https://platform.openai.com/api-keys) and click the `"Create new secret key"` button.

<HorizontalCenterImg
    src="/model-provider/openai/create-new-secret-key.webp"
    alt="Create new secret key"
    width="600px"
  />

- In the dialog box that pops up, it is recommended to enter a descriptive name in the `Name` input box (e.g., `"Everywhere API Key"`), then click the `"Create secret key"` button.

<HorizontalCenterImg
    src="/model-provider/openai/create-new-secret-key-form.webp"
    alt="Create new secret key form"
    width="450px"
  />

- After successful creation, you will see an API key. Copy this key into Everywhere to proceed.

<HorizontalCenterImg
    src="/model-provider/openai/save-your-key.webp"
    alt="Save your key"
    width="450px"
  />

::: warning
Please be sure to save your API key properly, as it will only be displayed once. If you accidentally close the dialog box, you can generate a new key on the API keys page and delete the old key that you forgot to save.
:::

::: danger
Please note that the API key is sensitive information. Do not disclose it to anyone or share it in public.
:::