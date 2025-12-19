<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# 视觉树

视觉树插件为 Everywhere 提供了屏幕内 UI 元素的感知和操作能力。

::: tip
需要注意的是，即使未启用该插件，在聊天窗口发送消息时若附件中包含视觉元素，Everywhere 也会尝试获取视觉树。该插件主要提供额外的截图和操作功能。
:::

## 功能

该插件提供以下三个额外功能：

- UI 元素截图
- 全屏截图
- 操作 UI 元素

## 注意事项

### 操作 UI 元素

操作 UI 元素的功能由大模型自行把握是否执行。通常情况下，模型可能不愿意执行此类动作，且执行效果有时可能不尽人意。

### 软件兼容性

由于通过 UI 自动化获取视觉树，部分不支持无障碍特性的软件（如微信）将无法获取内容。此外，诸如游戏之类的应用也不可用。

### 实时性

视觉树的获取类似于快照而不是实时的，所以类似 YouTube 字幕翻译是做不到的。