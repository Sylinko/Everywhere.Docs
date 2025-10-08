<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# Get API Key from DeepSeek

This tutorial will guide you step-by-step on how to get an API key for [DeepSeek](https://www.deepseek.com).

## Steps

- Go to the [DeepSeek Platform](https://platform.deepseek.com/) and register & log in to your account.
- After logging in, navigate to **API keys** in the left sidebar.

<HorizontalCenterImg
    src="/model-provider/deepseek/platform-api-keys.webp" 
    alt="API keys page"
  />

- Click the **创建 API key** button, and a dialog will pop up where you can enter a name for the API key to help you remember its purpose.

<HorizontalCenterImg
    src="/model-provider/deepseek/platform-create-api-key.webp"
    alt="Create API key"
    width="400px"
  />

- Click the **创建** button. Upon success, your API key will be displayed. Copy this key to Everywhere to continue.

<HorizontalCenterImg
    src="/model-provider/deepseek/platform-generate-api-key.webp"
    alt="Generate API key"
    width="400px"
  />

::: warning
Please be sure to save your API key properly, as it will only be displayed once. If you accidentally close the dialog box, you can generate a new key on the API keys page and delete the old key that you forgot to save.
:::

::: danger
Please note that the API key is sensitive information. Do not disclose it to anyone or share it in public.
:::

## FAQ

### Why do I get a `PaymentRequired` error when adding a DeepSeek API Key?

If you encounter an `HTTP request error (PaymentRequired): Unknown error, please try again later.` when adding a DeepSeek API key in Everywhere, it usually means your DeepSeek account has an insufficient balance. You need to top up your account on the DeepSeek platform to continue using the API.