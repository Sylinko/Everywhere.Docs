---
prev: false
next: false
---

<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# 聊天插件

Everywhere 的聊天插件允许语言模型调用外部工具来完成更复杂的任务。

Everywhere 支持内置插件以及基于 **MCP (Model Context Protocol)** 协议的插件。

## 如何使用内置插件

内置插件随 Everywhere 本体一同分发。

1.  在 **聊天插件** 页面，勾选你想要启用的插件。

<HorizontalCenterImg
    src="/chat-plugins/index/builtin-zh-CN.webp"
    alt="内置插件列表"
    width="450px"
  />

2.  在与模型聊天时，请确保：
    *   你使用的模型支持工具调用（Tool Calling / Function Calling）。
    *   在聊天窗口中启用了 **工具调用** 选项。

<HorizontalCenterImg
    src="/chat-plugins/index/chat-window-zh-CN.webp"
    alt="聊天窗口启用工具调用"
    width="300px"
  />

3.  当你发送的消息触发了插件的功能时，模型 **可能** 会尝试调用你启用的工具来回答你的问题。

::: warning 限制
受限于模型自身能力，工具调用可能不会总是按预期工作。例如，模型可能会选择不调用工具，或者在调用时提供了错误的参数。
:::

## 贡献内置插件

我们欢迎熟悉 C# 开发的开发者为 Everywhere 贡献更多的内置插件。如果你有好的想法或已经实现了一个插件，请通过[提交 Pull Request](https://github.com/DearVa/Everywhere/pulls)的方式与我们分享。

## 未来的插件系统

我们理解不是所有人都熟悉 C# 开发。因此，我们计划在未来推出一个更简易的插件系统，让更多的开发者甚至是没有编程基础的用户，都能够方便快捷地编写和使用自己的插件。