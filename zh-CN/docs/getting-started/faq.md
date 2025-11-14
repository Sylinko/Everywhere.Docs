<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# 常见问题

## 付款

### 我订阅了 ChatGPT Plus/Team/Pro 或类似服务，为什么提示我余额不足？

ChatGPT Plus/Team/Pro 或 Gemini Google One 等订阅服务是针对其官方网站、App 等产品的，与 API 服务是分开计费的。

你需要为 API 服务单独充值。

## 服务提供商

### 使用了中转提供商（如硅基流动）该怎么配置模型？

::: warning 
硅基流动内`DeepSeek`模型的模型提供商是硅基流动，不是`DeepSeek`。
:::

比如您在硅基流动内使用`Pro/deepseek-ai/DeepSeek-V3`模型：

<HorizontalCenterImg
    src="/faq/siliconcloud-model-config.webp"
    alt="中转服务配置示例"
    width="500px"
  />

### 为什么我使用的（非官方支持的）模型提供商无法正常工作？

`Everywhere` 支持一系列主流的模型提供商（例如 OpenAI, Gemini, DeepSeek 等）。对于这些官方支持的提供商，我们会尽力确保其兼容性和稳定性。

然而，市面上存在大量兼容 OpenAI API 格式的第三方或个人搭建的模型服务。由于精力有限，我们无法对所有非官方支持的模型提供商进行测试和适配。如果您在使用非官方支持的模型提供商时遇到问题，我们建议您首先联系该服务的提供方寻求技术支持，或者切换到官方支持的模型提供商。

我们欢迎社区成员为支持新的模型提供商做出贡献，但请理解，开发团队无法为非官方支持的集成提供问题排查和支持。

### AI 没有给出任何回答

提问后，如果没有任何回答（但诸如**分析上下文**等提示信息正常显示），可能是由于 API 调用地址配置不正确。

例如，一个常见的错误是将 `https://api.openai.com/v1` 误写为 `https://api.openai.com`。

::: tip 如何找到正确的 API 调用地址
1. 如果您使用的模型提供商在 `Everywhere` 的官方支持列表中，请保持默认的调用地址不变。
2. 如果您使用的是第三方或个人搭建的服务，请参考其官方文档，找到正确的 API 调用地址（也称为“端点”或 “Endpoint”）。
   
   以 OpenAI 兼容 API 为例，您需要找到类似 `https://api.example.com/v1/chat/completions` 的地址，然后去掉末尾的 `/chat/completions` 部分，得到 `https://api.example.com/v1`，并将其填入 `Everywhere` 的 API 调用地址栏中。

<HorizontalCenterImg
    src="/faq/ai-no-answer-example.webp"
    alt="OpenAI API 调用地址示例"
    width="400px"
  />

:::

### 为什么无法使用网络搜索

您可能会发现，在 ChatGPT、Gemini 或 DeepSeek 等模型的官方网站上使用它们的服务时，它们具备网络搜索能力。这是因为这些提供商的网站自身集成了搜索功能，然后再将搜索结果与大语言模型结合，从而为您提供整合了最新信息的回答。

然而，当我们通过 API 调用这些大语言模型时，我们使用的是它们最核心的文本生成功能，本身并不包含网络搜索。

`Everywhere` 通过 API 与这些模型进行交互。因此，要启用网络搜索功能，需要借助一个外部的搜索引擎服务（例如 Google, Brave, Tavily, Bocha 等）。您需要在 `Everywhere` 中配置相应的搜索引擎服务，才能让 AI 在回答问题时具备联网搜索的能力。详见[聊天插件 - 网络搜索](/zh-CN/plugins/web-search)

### 其他已知问题

请参阅[模型提供商 - 已知问题](/zh-CN/model-provider/known-issues)页面，了解当前已知的与模型提供商集成相关的问题和限制。

## 软件使用

### 为什么我无法呼出悬浮框？

如果您按下快捷键后无法看到`Everywhere`的悬浮窗口，通常有两种可能的原因：
1. **快捷键冲突**：您设置的快捷键可能与系统中其他软件（例如截图工具、输入法等）相同。
  * **解决方法**：请尝试在`Everywhere`的`聊天窗口设置`中更换快捷键，然后再次尝试。
2. **管理员权限问题**：当您在以管理员权限运行的窗口（例如任务管理器、某些安装程序）中操作时，`Everywhere`也需要以管理员权限运行才能在该窗口上显示。这是由于 Windows 的用户账户控制（UAC）机制，它会通过“完整性级别”隔离不同权限的程序，防止低权限应用控制高权限应用。
  * **解决方法**：在`Everywhere`的`通用设置`中，点击`以管理员身份重启`按钮后再次尝试。
