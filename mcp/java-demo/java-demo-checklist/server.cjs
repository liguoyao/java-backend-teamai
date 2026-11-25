const readline = require("node:readline");

const checklist = {
  name: "java_checklist",
  description: "返回 java-demo 命名空间的 Java 开发规范检查项。",
  inputSchema: { type: "object", properties: {}, additionalProperties: false },
};

function reply(id, payload) {
  console.log(JSON.stringify({ jsonrpc: "2.0", id, ...payload }));
}

forEachRequest();

function forEachRequest() {
  const input = readline.createInterface({ input: process.stdin, crlfDelay: Infinity });
  input.on("line", (line) => {
    let request;
    try {
      request = JSON.parse(line);
    } catch {
      reply(null, { error: { code: -32700, message: "Parse error" } });
      return;
    }
    if (!request || request.jsonrpc !== "2.0" || typeof request.method !== "string") {
      reply(request?.id ?? null, { error: { code: -32600, message: "Invalid request" } });
      return;
    }
    const { id, method, params } = request;
    if (id === undefined) return;

    switch (method) {
      case "initialize":
        reply(id, { result: {
          protocolVersion: "2024-11-05",
          capabilities: { tools: {} },
          serverInfo: { name: "java-demo-checklist", version: "0.1.0" },
        } });
        break;
      case "ping":
        reply(id, { result: {} });
        break;
      case "tools/list":
        reply(id, { result: { tools: [checklist] } });
        break;
      case "tools/call":
        if (params?.name !== checklist.name || Object.keys(params.arguments ?? {}).length) {
          reply(id, { error: { code: -32602, message: "Expected java_checklist with no arguments" } });
          break;
        }
        reply(id, { result: { content: [{
          type: "text",
          text: "[java-demo] 核对 Java 版本、命名、Controller/Service 分层、构造器注入及 Maven 测试。",
        }] } });
        break;
      default:
        reply(id, { error: { code: -32601, message: "Method not found" } });
    }
  });
}
