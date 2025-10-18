<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# 常见问题

## 使用了中转提供商（如硅基流动）该怎么配置模型？

::: warning 
硅基流动内`DeepSeek`模型的模型提供商是硅基流动，不是`DeepSeek`。
:::

比如您在硅基流动内使用`Pro/deepseek-ai/DeepSeek-V3`模型：

<HorizontalCenterImg
    src="/faq/siliconcloud-model-config.webp"
    alt="中转服务配置示例"
    width="550px"
  />

## 为什么我使用的（非官方支持的）模型提供商无法正常工作？

`Everywhere` 支持一系列主流的模型提供商（例如 OpenAI, Gemini, DeepSeek 等）。对于这些官方支持的提供商，我们会尽力确保其兼容性和稳定性。

然而，市面上存在大量兼容 OpenAI API 格式的第三方或个人搭建的模型服务。由于精力有限，我们无法对所有非官方支持的模型提供商进行测试和适配。如果您在使用非官方支持的模型提供商时遇到问题，我们建议您首先联系该服务的提供方寻求技术支持，或者切换到官方支持的模型提供商。

我们欢迎社区成员为支持新的模型提供商做出贡献，但请理解，开发团队无法为非官方支持的集成提供问题排查和支持。

## AI 没有给出任何回答

提问后，如果没有任何回答（但是诸如**分析上下文**等提示信息显示），可能是由于以下原因：
- 如果您的模型采用 OpenAI 兼容的接口，请检查请求 Url 的后缀是否带有`v1`
> 正确的 Url 示例：https://api.openai.com/v1
> 
> 错误的 Url 示例：https://api.openai.com

## 为什么无法使用网络搜索

您可能会发现，在 ChatGPT、Gemini 或 DeepSeek 等模型的官方网站上使用它们的服务时，它们具备网络搜索能力。这是因为这些提供商的网站自身集成了搜索功能，然后再将搜索结果与大语言模型结合，从而为您提供整合了最新信息的回答。

然而，当我们通过 API 调用这些大语言模型时，我们使用的是它们最核心的文本生成功能，本身并不包含网络搜索。

`Everywhere` 通过 API 与这些模型进行交互。因此，要启用网络搜索功能，需要借助一个外部的搜索引擎服务（例如 Google, Brave, Tavily, Bocha 等）。您需要在 `Everywhere` 中配置相应的搜索引擎服务，才能让 AI 在回答问题时具备联网搜索的能力。详见[聊天插件 - 网络搜索](/zh-CN/plugins/web-search)

