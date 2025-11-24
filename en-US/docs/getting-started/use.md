<script lang="ts" setup>
  import HorizontalCenterImg from "/.vitepress/components/Common/HorizontalCenterImg.vue";
</script>

# Use

Intro Video of Everywhere: [YouTube](https://www.youtube.com/watch?v=BGujYa5hbXo) | [Bilibili](https://www.bilibili.com/video/BV1mcxvzfESz)

## Quick Start

::: info What if I accidentally close the software?
You can find the Everywhere icon in the tray menu (bottom right corner on Windows, top right corner on macOS) and click it to open the main interface.
:::

- After running Everywhere for the first time, you will see the welcome page：

<HorizontalCenterImg
    src="/getting-started/use/en-US/welcome-page-1.webp"
    alt="Welcome to Everywhere"
  />

- Click the **Let's start!** button to go to the model provider selection page. Here we take `OpenAI` as an example：

<HorizontalCenterImg
    src="/getting-started/use/en-US/welcome-page-2.webp"
    alt="Select Model Provider"
  />

::: tip Other Model Providers
If you are not using the official service of any of the model providers shown in the figure (such as aggregated APIs, proxy APIs), you need to click the **Skip** button in the upper right corner, and add an assistant and manually configure the model provider information on the **AI Assistant** page in the left sidebar.

For more information, please refer to [FAQ](/en-US/docs/getting-started/faq.md).
:::

- After selecting a model provider, you will be taken to the API Key entry page. You can also select a preset model to verify its validity and network environment after entering the API Key：

<HorizontalCenterImg
    src="/getting-started/use/en-US/welcome-page-3.webp"
    alt="Enter API Key"
  />

::: tip Payment and Acquisition
Most model providers' APIs require payment. Please ensure you have obtained a valid API Key and have sufficient balance in your account. Also, the subscription and API services for users are billed separately, which means subscribing to a service does not mean you can use its API for free.

You can refer to the **Model Providers** section in the documentation sidebar to learn how to obtain API Keys for each model provider.
:::

::: danger Privacy
Please note that API keys are sensitive information. Do not disclose them to anyone or share them in public.
:::

- After entering the API Key and clicking the **Verify API key** button, if everything goes well, you will see the following prompt, indicating that the API Key is valid and the network environment is available. You can then click **Next**：

<HorizontalCenterImg
    src="/getting-started/use/en-US/welcome-page-4.webp"
    alt="Verification Successful"
  />

- You can change the default shortcut key (`Ctrl + Shift + E` or `Cmd + Shift + E`) to quickly open Everywhere as needed：

<HorizontalCenterImg
    src="/getting-started/use/en-US/welcome-page-5.webp"
    alt="Set Shortcut Key"
  />

::: tip Copilot Key
For Windows users, if your keyboard has a `Copilot` key, you can use it as a shortcut.
:::

- Finally, there is the telemetry option. You can choose whether to allow us to collect anonymous usage data to improve Everywhere：

<HorizontalCenterImg
    src="/getting-started/use/en-US/welcome-page-6.webp"
    alt="Telemetry Option"
  />

::: danger Privacy
Everywhere takes user privacy very seriously. The telemetry data is anonymous and does not contain personally identifiable information, nor does it include sensitive information such as API Keys. You can select **Send only necessary data** to maximize your privacy.
:::

- After that, you will enter the main interface of Everywhere and can start using it. It should be noted that Everywhere requires additional plugins to be enabled to support specific functions. You can click on **Chat Plugins** in the software sidebar for specific settings：

<HorizontalCenterImg
    src="/getting-started/use/en-US/plugin-page.webp"
    alt="Chat Plugins"
  />

- At this point, you have completed the initial setup of Everywhere. You can call it up with the shortcut key and start using Everywhere happily！

<HorizontalCenterImg
    src="/getting-started/use/en-US/hello-everywhere.webp"
    alt="Hello, Everywhere"
    width="400px"
  />