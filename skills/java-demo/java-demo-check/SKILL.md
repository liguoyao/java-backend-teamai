---
name: java-demo-check
description: 按 Java 开发规范检查 Spring Boot 代码改动并验证受影响的测试。
---

1. 读取 `pom.xml` 和本次变更，确定 Java 版本、受影响的入口和测试。
2. 检查命名、Controller 与 Service 的职责以及依赖注入方式。有 MCP 工具 `java_checklist` 时可用它读取检查项。
3. 使用项目的 Maven Wrapper 运行相关测试，例如 Windows 下的 `./mvnw.cmd -Dtest=DemoApplicationTests test`。
4. 报告具体问题、文件位置和测试结果。
5. 代码注释一定要有。
