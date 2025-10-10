# 常见问题

## AI 没有给出任何回答

提问后，如果没有任何回答（但是诸如**分析上下文**等提示信息显示），可能是由于以下原因：
- 如果您的模型采用 OpenAI 兼容的接口，请检查请求 Url 的后缀是否带有`v1`
> 正确的 Url 示例：https://api.openai.com/v1
> 
> 错误的 Url 示例：https://api.openai.com