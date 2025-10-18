<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# FAQ

## How to configure models when using a gateway provider (like OpenRouter)?

For example, if you are using the `openai/gpt-oss-20b:free` model within OpenRouter:

<HorizontalCenterImg
    src="/faq/openrouter-model-config.webp"
    alt="Gateway service configuration"
    width="550px"
  />

## Why isn't the (unofficially supported) model provider I'm using working properly?

`Everywhere` officially supports a range of common model providers (e.g., OpenAI, Gemini, DeepSeek, etc.). For these officially supported providers, we strive to ensure their compatibility and stability.

However, there are a large number of third-party or personally built model services on the market that are compatible with the OpenAI API format. Due to limited resources, we are unable to test and adapt to all unofficially supported model providers. If you encounter problems when using an unofficially supported model provider, we recommend that you first contact the provider of that service for technical support, or switch to an officially supported model provider.

We welcome community members to contribute to supporting new model providers, but please understand that the development team cannot provide troubleshooting and support for unofficially supported integrations.

## AI doesn't give any answer

After asking a question, if there is no answer (but prompts like **Analyzing context** are displayed), it may be due to the following reasons:
- If your model uses an OpenAI-compatible API Url, please check if the URL suffix has `v1`.
> Correct URL example: https://api.openai.com/v1
> 
> Incorrect URL example: https://api.openai.com

## Why can't I use web search?

You may notice that when using services on the official websites of models like ChatGPT, Gemini, or DeepSeek, they have web search capabilities. This is because these providers' websites have integrated search functionality themselves, which then combines the search results with the LLM to provide you with answers that incorporate the latest information.

However, when we call these LLMs via API, we are using their core text generation function, which does not include web search capabilities.

`Everywhere` interacts with these models via API. Therefore, to enable web search functionality, it needs to rely on an external search engine service (e.g., Google, Brave, Tavily, Bocha, etc.). You need to configure the corresponding search engine service in `Everywhere` to allow the AI to have web search capabilities when answering questions. For details, see [Chat Plugins - Web Search](/en-US/plugins/web-search).