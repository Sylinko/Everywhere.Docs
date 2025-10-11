<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

::: warning
Ollama 与 Everywhere 的使用属于高级功能，建议仅在了解其工作原理后再进行配置和使用，不保证其兼容性。
:::

# 接入 Ollama

本教程将一步步指导您如何接入[Ollama](https://ollama.com)的本地模型。

## 准备

- 考虑到本地模型运行，建议使用性能较好的计算机

## 步骤

- 在[Ollama 官网](https://ollama.com/download)下载并安装 Ollama 应用
  
<HorizontalCenterImg
    src="/model-provider/ollama/download.webp"
    alt="下载 Ollama"
    width="400px"
  />

- 安装完成后，打开 Ollama 应用，等待其初始化完成。之后打开命令行工具（如 PowerShell 或 CMD），输入以下命令以验证 Ollama CLI 是否可用：

```bash
ollama -v
```

- 如果命令行输出了 Ollama 的版本号，说明安装成功，否则请参阅[Ollama 官方文档](https://docs.ollama.com)。接下来，您可以选择并下载一个本地模型，在[此处](https://ollama.com/search)搜索 Ollama 支持的模型。例如，下载`gemma3:12b`模型：

```bash
ollama pull gemma3:12b
```

- 下载完成后，在终端输入`ollama list`确保结果内有您下载的模型。
- 在 Everywhere 中，将**模型**选为`Custom Model`，展开该选项卡：
  - 将**模型ID**设置为`gemma3:12b`（或您下载的其他模型名称）
  
<HorizontalCenterImg
    src="/model-provider/ollama/configuration-zh.webp"
    alt="配置 Ollama"
    width="600px"
  />

- 设置完成后即可开始使用。

## 常见问题

### 聊天信息显示带有 `ModelDoesNotSupportTools` 字样

如果您在使用 Ollama 模型时遇到聊天信息显示带有 `ModelDoesNotSupportTools` 字样，这通常意味着您所使用的 Ollama 模型不支持工具调用功能。您可以尝试更换为其他支持工具调用的模型，或者在 Everywhere 中禁用工具调用功能以避免此错误。