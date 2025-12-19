# AI Assistant

In Everywhere, you can manage and configure your AI assistants through the **AI Assistant** page in the software sidebar.

Each AI assistant can be understood as an independent configuration file, containing model provider information, API keys, and other related settings. You can create multiple AI assistants as needed to use different models and configurations in various scenarios.

## Settings

::: tip Check Connectivity
When configuring an AI assistant, you can use the **Check Connectivity** button in the upper right corner of the page to verify if the entered API information is correct and if the network environment is available.

If the check fails, please verify if the API Endpoint, API Protocol, and API Key are correct, or try switching to a different network environment.
:::

### Icon <Badge type="tip" text="Personalization" />

You can set a custom icon for each assistant to make it easier to distinguish between different assistants in the sidebar.

Click on the icon area to select a Lucide icon or some Emoji as the assistant's icon. You can also modify the icon and background color.

### Name <Badge type="tip" text="Personalization" />

Give the assistant an easily recognizable name to facilitate switching between multiple assistants.

### Description <Badge type="tip" text="Personalization" />

Add a short description to the assistant to help you remember its purpose or features.

### System Prompt <Badge type="warning" text="AI Behavior" />

The system prompt is used to guide the AI assistant's behavior and response style. You can customize the system prompt as needed to make the assistant better suit your requirements.

::: tip Placeholders
We provide some placeholders that you can use in the system prompt to dynamically insert relevant information:
- `{Time}`: Current time
- `{OS}`: Current operating system name
- `{SystemLanguage}`: System language *consistent with the Everywhere interface language*
- `{WorkingDirectory}`: Current working directory path *usually a folder named with the current date under the `plugins` folder*
:::

::: details Default System Prompt Example
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

### Model Provider Template <Badge type="danger" text="API" />

Everywhere supports multiple AI model providers. You can select a suitable template from the dropdown menu. Each template presets some common configuration options to help you quickly set up the assistant.

For model providers not listed in the templates, you can <mark>choose a template with a similar request method</mark> and then manually adjust the relevant configurations.

### API Url <Badge type="danger" text="API" />

Everywhere automatically fills in the API url based on the selected model provider template. You can modify it as needed to adapt to different API endpoints.

### API Schema <Badge type="danger" text="API" />

Select the API schema corresponding to the model provider you are using. Different schemas may affect the request format and parameters. If you are unsure which schema to choose, keep the default value.

### API Key <Badge type="danger" text="API" />

Enter the API key you obtained from your model provider. Ensure the key is correct so that the assistant can successfully connect to the model service.

::: danger Privacy
Please note that API keys are sensitive information. Do not disclose them to anyone or share them in public.
:::

### Model Definition Template <Badge type="danger" text="API" />

Select the model definition template corresponding to the model provider you are using. Each template presets some common model names and parameters to help you quickly set up the assistant.

::: tip Other Models
<mark>If the model you want to use is not in the template list, you can ignore this option</mark> and directly enter the model ID you want to use in the **Model ID** field below.

The specific format for the **Model ID** varies among model providers. Please refer to the corresponding documentation for instructions.
:::

### Model ID <Badge type="danger" text="API" />

Enter the specific model ID you want to use. For example, for OpenAI, you can enter `gpt-5-mini`。

### Image Input Support <Badge type="warning" text="AI Feature" />

Enabling this option allows you to upload images in the chat context. If the model does not support image input, enabling this option may cause requests to fail.

### Tools Usage Support <Badge type="warning" text="AI Feature" />

Enabling this option allows the model to use the tools (plugins) you have configured. If the model does not support tool use, enabling this option may cause requests to fail.

### Deep Thinking Support <Badge type="warning" text="AI Feature" />

Enabling this option makes the model think before answering. If the model does not support deep thinking, enabling this option may cause requests to fail.

### Maximum Context Length <Badge type="warning" text="AI Feature" />

Set the maximum context length (in tokens) that the model can use in a conversation. Please adjust this according to the limits of the model you are using.

### Request Timeout <Badge type="danger" text="API" />

Set the timeout for each API request in seconds. If a request is not completed within this time, it will be terminated. For slower models, it is recommended to increase the timeout duration appropriately.

### Creativity (Temperature) <Badge type="warning" text="AI Feature" />

Adjust the creativity of the model's generated responses. A higher value (e.g., 0.8) will make the responses more diverse and creative, while a lower value (e.g., 0.2) will make them more conservative and consistent.

### Thought Openness (Top-P) <Badge type="warning" text="AI Feature" />

Adjust the range of vocabulary the model considers when generating responses. A higher value (e.g., 0.9) will make the model consider more vocabulary options, while a lower value (e.g., 0.3) will restrict the model to only the most likely words.

### Expression Divergence (Presence Penalty) <Badge type="warning" text="AI Feature" />

Adjust the model's tendency to introduce new topics in its responses. A higher value (e.g., 0.6) will encourage the model to introduce more new topics, while a lower value (e.g., -0.6) will make the model more inclined to repeat existing topics.

### Vocabulary Richness (Frequency Penalty) <Badge type="warning" text="AI Feature" />

Adjust the model's tendency to repeat the same words in its responses. A higher value (e.g., 0.6) will reduce the use of repeated words, while a lower value (e.g., -0.6) will allow for more repetition.