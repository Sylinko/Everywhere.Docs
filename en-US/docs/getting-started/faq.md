# FAQ

## AI doesn't give any answer

After asking a question, if there is no answer (but prompts like **Analyzing context** are displayed), it may be due to the following reasons:
- If your model uses an OpenAI-compatible API Url, please check if the URL suffix has `v1`.
> Correct URL example: https://api.openai.com/v1
> 
> Incorrect URL example: https://api.openai.com

## Why can't I use web search?

You may notice that when using services on the official websites of models like ChatGPT, Gemini, or DeepSeek, they have web search capabilities. This is because these providers' websites have integrated search functionality themselves, which then combines the search results with the LLM to provide you with answers that incorporate the latest information.

However, when we call these LLMs via API, we are using their core text generation function, which does not include web search capabilities.

`Everywhere` interacts with these models via API. Therefore, to enable web search functionality, it needs to rely on an external search engine service (e.g., Google, Bing, Brave, Bocha, etc.). You need to configure the corresponding search engine service in `Everywhere` to allow the AI to have web search capabilities when answering questions. For details, see [Chat Plugins - Web Search](/en-US/plugins/web-search).