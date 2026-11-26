---
labels:
  - value: insufficient_evidence
    score: 0
    description: The evidence does not establish that a Java change was made.
  - value: needs_revision
    score: 1
    description: A Java change is evidenced, but its correctness or verification is incomplete.
  - value: passed
    score: 2
    description: The evidenced Java change satisfies the request and has adequate verification.
passingScore: 2
---
评估本次 Java 改动的交付质量。以用户的最终需求、实际代码差异、测试和运行结果为依据。

- 需求覆盖：变更通过实际入口实现用户要求，保留现有调用方依赖的行为，并处理与本次改动相关的边界条件。
- 实现质量：改动符合仓库约定，复用适用的现有逻辑。指出缺陷时，说明其触发条件和实际影响。
- 验证：实际执行的测试或有针对性的运行检查应覆盖变更行为。区分编译通过、测试通过、测试失败和测试未执行。若既有问题阻塞常规测试，检查替代验证是否直接覆盖需求及相关回归风险。

只有需求、计划或缺少佐证的完成声明时，选择 `insufficient_evidence`。有实际改动的证据，但需求未完成、存在实质性缺陷或关键验收条件未得到验证时，选择 `needs_revision`。需求、实现质量和验证均有充分证据时，选择 `passed`。

在理由中引用具体文件、差异或工具结果，并指出影响评分的缺口。避免复述凭证或无关的私密信息。
