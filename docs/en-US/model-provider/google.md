<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# Getting an API Key from Google Gemini

This tutorial will guide you step-by-step on how to get an API key for [Google Gemini](https://cloud.google.com/gemini).

::: tip
One of the great benefits of the Gemini API is its generous free tier. You get a daily quota of API calls at no cost — an advantage not commonly found with other providers.
:::

::: warning
This tutorial starts from Google Cloud, not by creating an API key directly in AI Studio.
:::

## Preparation

  - A Google account

## Steps

  - Go to the [Google Cloud Console](https://console.cloud.google.com/) and log in to your account.
  - After logging in, find the current default project, usually "**My First Project**," in the top left corner of the page. Click it to open the **Project selector**.

<HorizontalCenterImg
    src="/model-provider/google-gemini/project-manager.webp"
    alt="Project Manager"
    width="600px"
  />

  - In the Project selector, click the "**New Project**" button in the top right corner. This will take you to a new page where you can enter a project name. The organization field can be left blank.

<HorizontalCenterImg
    src="/model-provider/google-gemini/create-project.webp"
    alt="Create project"
    width="500px"
  />

  - After successfully creating the project, go to [Google AI Studio](https://aistudio.google.com/app/apikey) and log in to your account.
  - Once logged in, find the "**Create API Key**" button in the top right corner of the page. Click it, and in the pop-up window, select the project you just created.

<HorizontalCenterImg
    src="/model-provider/google-gemini/create-api-key-project-selection.webp"
    alt="Create API Key - Project Selection"
    width="400px"
  />

  - Click "**Create API key in existing project**." Your new API key will be displayed once it's created. Copy this key into Everywhere to proceed.

<HorizontalCenterImg
    src="/model-provider/google-gemini/api-key.webp"
    alt="API Key"
    width="600px"
  />

::: danger
Please note that the API key is sensitive information. Do not disclose it to anyone or share it in public.
:::