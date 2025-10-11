<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# Web Search

Everywhere supports fetching the latest information through web search. You can choose to use Google, Brave, Bing, or Bocha as your search engine.

## Via Google

This tutorial will guide you through the process of using [Google](https://cloud.google.com/gemini) as a web search service in Everywhere.

::: tip
Google's Custom Search JSON API offers 100 free search queries per day ([see developer documentation](https://developers.google.com/custom-search/v1/overview))
:::

::: warning
The Google search service currently only supports access in some countries and regions. If your region is not supported, it is recommended to use other search services.
:::

### Preparation

- A Google account
- If you have already created a project in Google Cloud, you can use the existing project directly.

### Steps

- Go to the [Google Cloud Console](https://console.cloud.google.com/) and log in to your account.
- After logging in, find the current default project, usually "**My First Project**," in the top left corner of the page. Click it to open the **Project selector**.

<HorizontalCenterImg
    src="/model-provider/google/project-manager.webp"
    alt="Project Manager"
    width="600px"
  />

- In the Project selector, click the "**New Project**" button in the top right corner. This will take you to a new page where you can enter a project name. The organization field can be left blank.

<HorizontalCenterImg
    src="/model-provider/google/create-project.webp"
    alt="Create project"
    width="500px"
  />

- After successfully creating the project, go to the [Programmable Search Engine Control Panel](https://programmablesearchengine.google.com/controlpanel/all) and click the **Add** button in the top right corner.

<HorizontalCenterImg
    src="/plugins/web-search/google/create-new-search-engine.webp"
    alt="Create search engine"
    width="500px"
  />

- In the form, enter a memorable name in the **Name your search engine** input box, select **Search the entire web** for **What to search?**, and leave the other settings at their defaults. After completing the CAPTCHA, click **Create**.

<HorizontalCenterImg
    src="/plugins/web-search/google/new-search-engine-form.webp"
    alt="Configure search engine"
    width="500px"
  />

- After the creation is successful, click **Customize** to enter the management page.

<HorizontalCenterImg
    src="/plugins/web-search/google/create-new-search-engine-success.webp"
    alt="Creation successful"
    width="500px"
  />

- In the **Basic** card, find the **Search engine ID** and copy it to the **Search engine ID** configuration item in Everywhere.

<HorizontalCenterImg
    src="/plugins/web-search/google/get-search-engine-id.webp"
    alt="Search engine ID"
    width="500px"
  />

- After visiting the [Custom Search JSON API Guide](https://developers.google.com/custom-search/v1/overview), find the **API key** section and click **Get a Key**.

<HorizontalCenterImg
    src="/plugins/web-search/google/get-api-key.webp"
    alt="API key"
    width="500px"
  />

- In the pop-up page, select the previously created project and click **NEXT**.

<HorizontalCenterImg
    src="/plugins/web-search/google/get-api-key-enable.webp"
    alt="Select project"
    width="500px"
  />

- Click **CONFIRM AND CONTINUE** to confirm enabling the Custom Search API in your project.

<HorizontalCenterImg
    src="/plugins/web-search/google/get-api-key-confirm.webp"
    alt="Confirm enable"
    width="500px"
  />

- After successfully enabling, click **SHOW KEY** to see the API key. Copy this key to the **API key** configuration item in Everywhere to use Google's search service.

::: warning
Please make sure to keep the API key safe, as it will only be displayed once (if possible, also save a copy of the search engine ID for future use). If you accidentally close the dialog, you can click **Get a Key** again to regenerate a new key following the process.
:::

::: danger
Please note that the API key is sensitive information. Do not disclose it to anyone or share it in public.
:::

## Via Brave

This tutorial will guide you through the process of using [Brave](https://brave.com/search/api/) as a web search service in Everywhere.

::: warning
The Brave search service currently only supports access in some countries and regions. If your region is not supported, it is recommended to use other search services.
:::

### Preparation

- Register and log in to a Brave account
- May require a valid payment method, such as **Google Pay** or **debit/credit card**

### Steps

- Visit the [Brave Search API Dashboard](https://api-dashboard.search.brave.com/app/dashboard)

<HorizontalCenterImg
    src="/plugins/web-search/brave/homepage.webp"
    alt="Homepage"
    width="600px"
  />

- In the left sidebar of the page, click **Subscriptions**, select the subscription plan you need, and click **Subscribe**. *(Here, the selection is a free plan)*

<HorizontalCenterImg
    src="/plugins/web-search/brave/subscriptions.webp"
    alt="Subscription plans"
    width="600px"
  />

- Read and agree to the terms, enter the payment interface to select your payment method, and complete the subscription. Return to the **Subscriptions** page to ensure that your plan has been successfully subscribed.

<HorizontalCenterImg
    src="/plugins/web-search/brave/subscribed.webp"
    alt="Subscribed successfully"
    width="300px"
  />

- Click **API Keys** in the left sidebar, and then click **Add API key** in the upper right corner. In the pop-up dialog, fill in a memorable name in the **Name** field, select the plan you just subscribed to in the **Subscription** field, and click **Add**.

<HorizontalCenterImg
    src="/plugins/web-search/brave/create-api-key.webp"
    alt="Add API key"
    width="400px"
  />

- After successful creation, you will see the API key you just created. Click the **Copy** button to copy the key to the **API Key** configuration item in Everywhere to use Brave's search service.

<HorizontalCenterImg
    src="/plugins/web-search/brave/api-key.webp"
    alt="Copy API key"
    width="600px"
  />

::: danger
Please note that the API key is sensitive information. Do not disclose it to anyone or share it in public.
:::