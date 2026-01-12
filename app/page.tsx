export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10 lg:px-16">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
              项目展示 · 定制咨询
            </p>
            <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
              法币出入金 · 区块链 · 理财 · AI 面相解析
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400">
              提供从方案设计、产品落地到合规咨询的端到端能力，涵盖跨境法币出入金、链上资产管理、理财收益分发、以及基于 AI 的面相解析解决方案。
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:contact@example.com"
                className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
              >
                预约沟通
              </a>
              <a
                href="#projects"
                className="rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-900 transition hover:border-black hover:text-black dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-white dark:hover:text-white"
              >
                查看项目清单
              </a>
            </div>
          </div>
          <div className="grid gap-4 rounded-2xl border border-zinc-200 bg-white/80 p-6 shadow-sm backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
            <div className="flex items-center justify-between">
              <span className="text-sm text-zinc-500">交付模型</span>
              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200">
                可选 SaaS / 私有化
              </span>
            </div>
            <ul className="grid gap-3 text-sm text-zinc-700 dark:text-zinc-300">
              <li>· 顾问式需求梳理 & 合规提示</li>
              <li>· 原型/交互设计 + UI 交付</li>
              <li>· 前后端研发、上云与监控</li>
              <li>· 运维 SLA、迭代优化</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="space-y-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold">核心项目</h2>
            <span className="text-sm text-zinc-500">可定制 / 可集成</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {[
              {
                title: "法币出入金中台",
                desc: "支持多币种结算、风控拦截、合规审计；对接主流支付通道与卡组织，提供商户管理与对账报表。",
                tags: ["合规模块", "多通道路由", "风控策略"],
              },
              {
                title: "区块链资产管理",
                desc: "链上钱包托管、冷热分离、批量支付、地址白名单；支持多公链、多签与权限分级。",
                tags: ["多链支持", "资金审批", "风控监控"],
              },
              {
                title: "理财收益分发",
                desc: "收益计算、产品申赎、分润规则、KYC/KYB 接入；提供结算报表与资金流追踪。",
                tags: ["收益引擎", "自动对账", "多角色"],
              },
              {
                title: "AI 面相解析",
                desc: "基于面部关键点的特征分析与性格/趋势报告生成；提供 Web/H5 SDK，支持私有化部署。",
                tags: ["AI 推理", "隐私保护", "报告生成"],
              },
              {
                title: "合规与风控套件",
                desc: "设备指纹、IP 画像、黑名单、交易限额、反洗钱规则配置；实时监测与告警。",
                tags: ["风控策略", "实时监控", "审计日志"],
              },
              {
                title: "运营与数据看板",
                desc: "渠道转化、资金流向、用户留存与分层运营；预警看板与自助导出。",
                tags: ["数据洞察", "指标预警", "多维分析"],
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold">合作流程</h2>
            <span className="text-sm text-zinc-500">按需定制 · 快速上线</span>
          </div>
          <ol className="grid gap-3 text-sm text-zinc-700 dark:text-zinc-300 sm:grid-cols-2 lg:grid-cols-4">
            <li className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-900/60">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                01 需求沟通
              </p>
              <p className="mt-2 leading-6">
                场景梳理、合规与风控提醒，确定交付边界与里程碑。
              </p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-900/60">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                02 原型设计
              </p>
              <p className="mt-2 leading-6">
                交互原型与 UI 设计评审，锁定范围与体验。
              </p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-900/60">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                03 研发交付
              </p>
              <p className="mt-2 leading-6">
                前后端联调、测试验证、性能与安全加固。
              </p>
            </li>
            <li className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-900/60">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-500">
                04 上线运营
              </p>
              <p className="mt-2 leading-6">
                部署上线、监控告警、持续迭代与数据运营支持。
              </p>
            </li>
          </ol>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:contact@example.com"
              className="rounded-full bg-black px-5 py-3 text-sm font-medium text-white shadow-sm transition hover:bg-zinc-800 dark:bg-white dark:text-black dark:hover:bg-zinc-200"
            >
              立即预约沟通
            </a>
            <span className="text-sm text-zinc-500 dark:text-zinc-400">
              支持 SaaS / 私有化交付 · 提供合规与风控建议
            </span>
          </div>
        </section>
      </main>
    </div>
  );
}
