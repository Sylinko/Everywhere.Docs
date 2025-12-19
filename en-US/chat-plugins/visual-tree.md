<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# Visual Tree

The Visual Tree plugin empowers Everywhere with the ability to perceive and interact with on-screen UI elements.

::: tip
Please note that even if this plugin is not enabled, Everywhere will attempt to retrieve the visual tree if a visual element is included when sending a message in the chat window. This plugin only provides additional functions.
:::

## Features

This plugin provides three additional capabilities:

- Capture UI Element
- Capture Full Screen
- Operate UI Elements

## Notes

### Manipulating UI Elements

The decision to execute UI manipulation actions is up to the large model. Typically, models may be reluctant to perform such actions, and the results can sometimes be unsatisfactory.

### Software Compatibility

Since the visual tree is obtained via UI automation, content cannot be retrieved from software that does not support accessibility features (such as WeChat). Additionally, applications like games are not supported.

### Real-time

The visual tree acquisition works like a snapshot rather than a real-time stream, so tasks like real-time YouTube subtitle translation are not possible.