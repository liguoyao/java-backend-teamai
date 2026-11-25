# Java 开发规范

- 以 `pom.xml` 的 Java 版本和现有项目结构为准。
- 类名用 UpperCamelCase，方法和变量名用 lowerCamelCase。
- Spring Controller 处理 HTTP 请求和参数校验，业务逻辑放到 Service。依赖通过构造器注入。
- 提交前用 Maven Wrapper 运行受影响的测试。报告实际执行结果。
