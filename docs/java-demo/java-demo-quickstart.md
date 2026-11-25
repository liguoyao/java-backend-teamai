# Java 开发速查

本项目的 Java 版本以 `pom.xml` 中的 `java.version` 为准。修改接口时，从 Controller 找到对应的业务逻辑和测试。Controller 负责请求校验与响应，Service 负责业务处理。

在 Windows 上运行已有的应用测试：

```powershell
.\mvnw.cmd -Dtest=DemoApplicationTests test
```

团队仓库包含本文后，启用了 `java-demo` 文档命名空间的成员可运行 `teamai pull`，再到工作区的 `.teamai/docs/java-demo/` 查看同步结果。
