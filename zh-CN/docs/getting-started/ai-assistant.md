# AI 助手

在 Everywhere 中，您可以通过软件侧边栏的 **AI 助手** 页面来管理和配置您的 AI 助手。

每个 AI 助手可以理解为一个独立的配置文件，包含了模型提供商信息、API Key 以及其他相关设置。您可以根据需要创建多个 AI 助手，以便在不同的场景下使用不同的模型和配置。

## 设置项

::: tip 测试连通性
在配置 AI 助手时，您可以使用页面右上方的 **测试连通性** 按钮来验证所填写的 API 信息是否正确，以及网络环境是否可用。

如果测试失败，请检查 API 调用地址、API 协议和 API 密钥是否正确，或者尝试更换网络环境。
:::

### 图标 <Badge type="tip" text="个性化" />

您可以给每个助手设置一个自定义图标，以便在侧边栏中更容易区分不同的助手。

点击图标区域，可以选择 Lucide 图标或部分 Emoji 表情作为助手的图标。同时，您也可以修改图标和背景颜色。

### 名称 <Badge type="tip" text="个性化" />

给助手命名一个易于识别的名称，方便在多个助手之间进行切换。

### 描述 <Badge type="tip" text="个性化" />

给助手添加简短的描述，帮助您记住该助手的用途或特点。

### 系统提示词 <Badge type="warning" text="AI 行为" />

系统提示词用于指导 AI 助手的行为和回答风格。您可以根据需要自定义系统提示词，以便让助手更好地符合您的需求。

::: tip 占位符
我们为您提供了一些占位符，您可以在系统提示词中使用它们来动态插入相关信息：
- `{Time}`：当前时间
- `{OS}`：当前操作系统名称
- `{SystemLanguage}`：系统语言 *与 Everywhere 界面语言一致*
- `{WorkingDirectory}`：当前工作目录路径 *通常在`plugins`文件夹下以当天日期命名的文件夹形式出现*
:::

::: details 默认系统提示词示例
```markdown
# Description
You are a helpful assistant named "Everywhere", a precise and contextual digital assistant.
Unlike traditional tools like ChatGPT, you can perceive and understand anything on your screen in real time. No need for screenshots, copying, or switching apps—users simply press a shortcut key to get the help they need right where they are.

# System Information
- OS: {OS}
- Current time: {Time}
- Language: {SystemLanguage}
- Working directory: {WorkingDirectory}

# Rules
- You MUST NOT provide user with anything that LOOKS LIKE sensitive information, for example - passwords, product keys, API keys, etc.
- You MUST reply in System Language except for tasks such as translation or user specifically requests another language.
- You MUST use tools when necessary to complete the user's requests.
- You MUST use $ or $$ when writing mathematical expressions instead of \( \) or \[ \].
```
:::

### 模型提供商模板 <Badge type="danger" text="API" />

Everywhere 支持多种 AI 模型提供商，您可以从下拉菜单中选择合适的模板。每个模板预设了一些常用的配置选项，方便您快速设置助手。

对于没有出现在模板列表中的模型提供商，您可以选择一个在请求方式上相似的模板，然后手动调整相关配置。

### API 调用地址 <Badge type="danger" text="API" />

Everywhere 会根据所选的模型提供商模板自动填写 API 调用地址。您可以根据需要进行修改，以适应不同的 API 端点。

### API 协议 <Badge type="danger" text="API" />

选择与所使用的模型提供商相对应的 API 协议。不同的协议可能会影响请求的格式和参数。如果你不确定选择哪个协议，请保持默认值。

### API 密钥 <Badge type="danger" text="API" />

输入您从模型提供商处获得的 API 密钥。确保密钥的正确性，以便助手能够成功连接到模型服务。

::: danger 隐私
请注意，API 密钥是敏感信息，请不要将其泄露给任何人或在公共场合分享。
:::

### 模型定义模板 <Badge type="danger" text="API" />

选择与所使用的模型提供商相对应的模型定义模板。每个模板预设了一些常用的模型名称和参数，方便您快速设置助手。

::: tip 其他模型
如果您想使用的模型不在模板列表中，您可以忽视该选项，在下方的 **模型 ID** 处直接输入您想使用的模型 ID。

**模型 ID** 的具体填写方式各个模型提供商有所不同，请参考对应的文档说明。
:::

### 模型 ID <Badge type="danger" text="API" />

输入您想使用的具体模型 ID。比如，对于 OpenAI，您可以输入 `gpt-5-mini`。

### 支持图像输入 <Badge type="warning" text="AI 功能" />

启用此选项后，你可以在聊天上下文中上传图像。如果模型不支持图像输入，开启此选项可能会导致请求失败。

### 支持使用工具 <Badge type="warning" text="AI 功能" />

启用此选项后，模型使用你配置的工具（插件）。如果模型不支持使用工具，开启此选项可能会导致请求失败。

### 支持深度思考 <Badge type="warning" text="AI 功能" />

启用此选项后，模型会先思考再回答。如果模型不支持深度思考，开启此选项可能会导致请求失败。

### 最大上下文长度 <Badge type="warning" text="AI 功能" />

设置模型在对话中可以使用的最大上下文长度（以令牌为单位）。请根据所使用的模型的限制进行调整。

### 请求超时时长 <Badge type="danger" text="API" />

设置每次 API 请求的超时时长（以秒为单位）。如果请求超过该时间未完成，将会被终止。对于速度较慢的模型，建议适当增加超时时长。

### 创意活跃度 (Temperature) <Badge type="warning" text="AI 功能" />

调整模型生成回答时的创意活跃度。较高的数值（如 0.8）会使回答更加多样化和富有创意，而较低的数值（如 0.2）则会使回答更加保守和一致。

### 思维开发度 (Top-P) <Badge type="warning" text="AI 功能" />

调整模型在生成回答时考虑的词汇范围。较高的数值（如 0.9）会使模型考虑更多的词汇选项，而较低的数值（如 0.3）则会限制模型只考虑最可能的词汇。

### 表述发散度 (Presence Penalty) <Badge type="warning" text="AI 功能" />

调整模型在回答中引入新话题的倾向。较高的数值（如 0.6）会鼓励模型引入更多新话题，而较低的数值（如 -0.6）则会使模型更倾向于重复已有的话题。

### 词汇丰富度 (Frequency Penalty) <Badge type="warning" text="AI 功能" />

调整模型在回答中重复使用相同词汇的倾向。较高的数值（如 0.6）会减少重复词汇的使用，而较低的数值（如 -0.6）则会允许更多的重复。