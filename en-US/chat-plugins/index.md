---
prev: false
next: false
---

<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# Chat Plugins

Everywhere's chat plugins allow language models to call external tools to accomplish more complex tasks.

Currently, Everywhere only supports built-in plugins. We are actively developing and will soon launch an MCP-based integration method, so stay tuned.

## How to Use Built-in Plugins

Built-in plugins are distributed with the Everywhere application.

1.  On the **Chat Plugins** page, check the plugins you want to enable.

<HorizontalCenterImg
    src="/chat-plugins/index/builtin-en-US.webp"
    alt="Built-in Plugin List"
    width="450px"
  />

2.  When chatting with the model, make sure that:
    *   The model you are using supports Tool Calling / Function Calling.
    *   The **Tool Calling** option is enabled in the chat window.

<HorizontalCenterImg
    src="/chat-plugins/index/chat-window-en-US.webp"
    alt="Enable Tool Calling in Chat Window"
    width="300px"
  />

3.  When your message triggers a plugin's functionality, the model **may attempt** to call the enabled tools to answer your question.

::: warning Limitations
Due to the inherent capabilities of the model, tool calling may not always work as expected. For example, the model might choose not to call a tool or may provide incorrect parameters when calling.
:::

## Contributing Built-in Plugins

We welcome developers familiar with C# to contribute more built-in plugins to Everywhere. If you have a great idea or have already implemented a plugin, please share it with us by [submitting a Pull Request](https://github.com/DearVa/Everywhere/pulls).

## Future Plugin System

We understand that not everyone is familiar with C# development. Therefore, we plan to introduce a simpler plugin system in the future, allowing more developers and even users with no programming background to easily write and use their own plugins.