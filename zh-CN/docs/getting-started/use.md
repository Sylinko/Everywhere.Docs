<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# 使用

Everywhere 介绍视频请参阅：[Bilibili](https://www.bilibili.com/video/BV1mcxvzfESz) | [YouTube](https://www.youtube.com/watch?v=BGujYa5hbXo)

## 快速开始

::: info 不小心关掉软件怎么办
您可以在托盘菜单（Windows 系统右下角，macOS 系统右上角）找到 Everywhere 图标，点击打开软件主界面。
:::

- 初次运行 Everywhere 后，您将看到欢迎页面：

<HorizontalCenterImg
    src="/getting-started/use/zh-CN/welcome-page-1.webp"
    alt="欢迎来到 Everywhere"
  />

- 点击 **让我们开始吧！** 按钮，进入模型提供商选择页面，这里以`OpenAI`为例：

<HorizontalCenterImg
    src="/getting-started/use/zh-CN/welcome-page-2.webp"
    alt="选择模型提供商"
  />

::: tip 其他模型提供商
如果您使用的不是图中所示任何一家模型提供商的官方服务（比如聚合API、代理API），您需要点击右上角的 **跳过** 按钮，在左侧边栏的 **AI助手** 页面中添加助手并手动配置模型提供商信息。

更多请参阅[[zh-CN/docs/getting-started/faq|常见问题]]。
:::

- 选择模型提供商后，进入 API Key 填写页面，同时可以选择一个预设模型，用于在输入 API Key 后验证其有效性和网络环境：

<HorizontalCenterImg
    src="/getting-started/use/zh-CN/welcome-page-3.webp"
    alt="填写 API Key"
  />

::: tip 付费与获取
绝大多数模型提供商的 API 都需要付费调用，请确保您已经获取了有效的 API Key 并且账户中有足够的余额。同时，各个提供商面向用户的订阅和 API 服务是分开计费的，并不意味着您订阅了某个服务就可以免费使用其 API。

可以参考文档侧边栏的 **模型提供商** 部分，了解如何获取各模型提供商的 API Key。
:::

::: warning 网络环境
对于包括 OpenAI 在内的境外模型提供商，您可能无法直接访问其 API 服务。如果您在验证 API Key 时遇到网络错误，请尝试使用其他模型或设置代理、中转服务。
:::

::: danger 隐私
请注意，API 密钥是敏感信息，请不要将其泄露给任何人或在公共场合分享。
:::

- 填写 API Key 后点击 **验证密钥有效性** 按钮后，如果一切顺利，您将看到如下提示，表示 API Key 有效且网络环境可用，可以点击 **下一步** 了：

<HorizontalCenterImg
    src="/getting-started/use/zh-CN/welcome-page-4.webp"
    alt="验证成功"
  />

- 您可以根据需要修改默认快捷键（`Ctrl + Shift + E` 或 `Cmd + Shift + E`）来快速打开 Everywhere：

<HorizontalCenterImg
    src="/getting-started/use/zh-CN/welcome-page-5.webp"
    alt="设置快捷键"
  />

::: tip Copilot 键
对于 Windows 用户，如果您的键盘上有`Copilot`键，可以将其作为快捷键。
:::

- 最后是遥测选项，您可以选择是否允许我们收集匿名使用数据来改进 Everywhere：

<HorizontalCenterImg
    src="/getting-started/use/zh-CN/welcome-page-6.webp"
    alt="遥测选项"
  />

::: danger 隐私
Everywhere 非常重视用户隐私，遥测数据均为匿名且不可识别个人身份的信息，当然也不包含 API Key 等敏感信息。您可以选择 **仅发送必要数据** 来最大限度地保护隐私。
:::

- 之后，您就进入了 Everywhere 主界面，可以开始使用了。需要注意的是，Everywhere 需要额外启用插件来支持特定功能，您可以点击软件侧边栏的 **聊天插件** 具体设置：

<HorizontalCenterImg
    src="/getting-started/use/zh-CN/plugin-page.webp"
    alt="聊天插件"
  />

- 至此，您已经完成了 Everywhere 的初始设置，通过快捷键呼出，可以开始愉快地使用 Everywhere 了！

<HorizontalCenterImg
    src="/getting-started/use/zh-CN/hello-everywhere.webp"
    alt="你好，Everywhere"
    width="400px"
  />