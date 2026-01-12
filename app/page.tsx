export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1220] via-[#0c1628] to-[#0c0f1a] text-zinc-50 antialiased">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10 lg:px-16">
        {/* Hero Section */}
        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-200">
              现成产品 · 源码交付 · 培训支持
            </span>
            <div className="space-y-4">
              <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
                法币出入金 · 区块链 · 理财 · AI 面相解析
              </h1>
              <p className="text-lg text-zinc-200/90">
                现成解决方案，源码交付，包含完整培训。涵盖跨境法币出入金、链上资产管理、理财收益分发、以及基于 AI 的面相解析等成熟产品。
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#pricing"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-zinc-200"
              >
                查看价格
              </a>
              <a
                href="#contact"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:text-white"
              >
                QQ / 微信咨询
              </a>
            </div>
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:grid-cols-3">
              {[
                { label: "交付方式", value: "源码 + 文档 + 培训" },
                { label: "课程周期", value: "7-14 天快速上手" },
                { label: "服务支持", value: "技术答疑 · 部署指导" },
              ].map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                    {item.label}
                  </p>
                  <p className="text-sm font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(16,185,129,0.25),transparent_30%)]" />
            <div className="relative grid gap-4 text-sm text-zinc-100">
              <div className="flex items-center justify-between">
                <span className="text-zinc-300">交付内容</span>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                  现成产品 · 源码交付
                </span>
              </div>
              <ul className="grid gap-2 leading-6 text-zinc-200">
                <li>· 完整前后端源码（可二次开发）</li>
                <li>· 技术文档 + API 接口文档</li>
                <li>· 部署指南 + 环境配置说明</li>
                <li>· 7-14 天培训支持（线上/线下）</li>
              </ul>
            </div>
          </div>
        </section>

        {/* 产品列表 */}
        <section id="projects" className="space-y-6">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-white">现成产品</h2>
            <span className="text-sm text-zinc-400">源码交付 · 培训支持</span>
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
                className="relative flex flex-col gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-emerald-500/5" />
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-emerald-200">
                      现成产品
                    </div>
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-6 text-zinc-200">
                      {item.desc}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-zinc-100"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 课程周期 */}
        <section className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-white">课程周期</h2>
            <span className="text-sm text-zinc-400">快速上手 · 7-14 天</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { phase: "第 1-3 天", title: "环境搭建", desc: "源码部署、环境配置、数据库初始化" },
              { phase: "第 4-7 天", title: "功能学习", desc: "核心功能讲解、API 接口使用、业务流程梳理" },
              { phase: "第 8-11 天", title: "二次开发", desc: "定制化修改、集成对接、测试验证" },
              { phase: "第 12-14 天", title: "上线运营", desc: "生产部署、监控配置、运维支持" },
            ].map((item) => (
              <div
                key={item.phase}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-emerald-200">
                  {item.phase}
                </p>
                <p className="mt-2 text-sm font-semibold text-white">{item.title}</p>
                <p className="mt-1 text-xs leading-5 text-zinc-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 适合人群 */}
        <section className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-white">适合人群</h2>
            <span className="text-sm text-zinc-400">不同角色 · 不同需求</span>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                role: "创业者 / 产品经理",
                desc: "需要快速验证商业模式，现成产品可快速上线，节省开发成本和时间。",
                fit: "适合有明确业务需求，希望快速启动项目的人群。",
              },
              {
                role: "技术负责人 / CTO",
                desc: "需要成熟的技术方案，源码可二次开发，支持私有化部署和定制化需求。",
                fit: "适合有技术团队，需要快速搭建业务系统的技术管理者。",
              },
              {
                role: "开发者 / 工程师",
                desc: "学习成熟项目的架构设计和实现方式，提升技术能力和项目经验。",
                fit: "适合希望学习行业最佳实践，提升开发技能的工程师。",
              },
              {
                role: "企业 / 机构",
                desc: "需要合规、稳定的业务系统，支持多租户、权限管理和数据安全。",
                fit: "适合有合规要求，需要私有化部署的企业客户。",
              },
              {
                role: "代理商 / 合作伙伴",
                desc: "可以基于现成产品快速开展业务，支持白标和品牌定制。",
                fit: "适合希望快速进入市场，提供 SaaS 服务的合作伙伴。",
              },
              {
                role: "投资人 / 项目方",
                desc: "需要技术方案支撑业务发展，现成产品可快速验证市场可行性。",
                fit: "适合需要技术方案支撑业务发展的投资方或项目方。",
              },
            ].map((item) => (
              <div
                key={item.role}
                className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-white/20"
              >
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1">
                  <span className="text-xs font-semibold text-emerald-200">{item.role}</span>
                </div>
                <p className="mb-2 text-sm leading-6 text-zinc-200">{item.desc}</p>
                <p className="text-xs text-zinc-400">{item.fit}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 价格和支付方式 */}
        <section id="pricing" className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-white">价格方案</h2>
            <span className="text-sm text-zinc-400">灵活选择 · 按需付费</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "基础版",
                price: "面议",
                desc: "单个产品源码 + 基础培训",
                features: [
                  "完整前后端源码",
                  "技术文档 + API 文档",
                  "7 天线上培训",
                  "30 天技术支持",
                ],
                highlight: false,
              },
              {
                name: "标准版",
                price: "面议",
                desc: "多个产品组合 + 深度培训",
                features: [
                  "2-3 个产品源码",
                  "完整技术文档",
                  "14 天培训（线上/线下）",
                  "60 天技术支持",
                  "部署指导 + 二次开发支持",
                ],
                highlight: true,
              },
              {
                name: "企业版",
                price: "面议",
                desc: "全产品套件 + 定制化服务",
                features: [
                  "全部产品源码",
                  "私有化部署支持",
                  "14 天培训 + 定制化培训",
                  "90 天技术支持",
                  "专属技术顾问",
                  "内推服务",
                ],
                highlight: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative overflow-hidden rounded-2xl border p-6 shadow-lg transition hover:-translate-y-1 ${
                  plan.highlight
                    ? "border-emerald-500/50 bg-gradient-to-br from-emerald-500/10 to-white/5"
                    : "border-white/10 bg-white/5"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute right-4 top-4 rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-200">
                    推荐
                  </div>
                )}
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-bold text-white">{plan.price}</span>
                  </div>
                  <p className="mt-2 text-sm text-zinc-300">{plan.desc}</p>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-zinc-200">
                      <span className="mt-1 text-emerald-200">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-6 block w-full rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                    plan.highlight
                      ? "bg-white text-black hover:bg-zinc-200"
                      : "border border-white/30 bg-white/5 text-white hover:border-white hover:bg-white/10"
                  }`}
                >
                  立即咨询
                </a>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">支付方式</h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { name: "银行转账", desc: "对公账户，支持企业付款" },
                { name: "支付宝", desc: "个人/企业账户均可" },
                { name: "微信支付", desc: "个人/企业账户均可" },
                { name: "USDT", desc: "加密货币支付（TRC20/ERC20）" },
              ].map((method) => (
                <div
                  key={method.name}
                  className="rounded-xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="font-semibold text-white">{method.name}</p>
                  <p className="mt-1 text-xs text-zinc-400">{method.desc}</p>
                </div>
              ))}
            </div>
            <p className="mt-4 text-sm text-zinc-300">
              💡 支付方式灵活，支持分期付款。具体支付方式请在咨询时确认。
            </p>
          </div>
        </section>

        {/* 内推服务 */}
        <section className="grid gap-6 rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-white/5 to-white/0 p-6 shadow-lg">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-white">内推服务</h2>
            <span className="text-sm text-zinc-400">企业版专享</span>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-3 text-lg font-semibold text-white">什么是内推？</h3>
                <p className="text-sm leading-6 text-zinc-200">
                  内推是指通过我们的渠道，将您的项目或产品推荐给潜在客户、合作伙伴或投资方。我们拥有丰富的行业资源和网络，可以帮助您快速对接目标客户。
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-3 text-lg font-semibold text-white">内推包含什么？</h3>
                <ul className="space-y-2 text-sm text-zinc-200">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-200">•</span>
                    <span>精准客户推荐（根据您的业务需求匹配）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-200">•</span>
                    <span>合作伙伴对接（支付通道、技术服务商等）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-200">•</span>
                    <span>投资方引荐（如有融资需求）</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-200">•</span>
                    <span>行业资源对接（合规咨询、技术支持等）</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-5">
                <h3 className="mb-3 text-lg font-semibold text-white">适合谁？</h3>
                <ul className="space-y-2 text-sm text-zinc-200">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-200">•</span>
                    <span>需要快速拓展客户的企业</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-200">•</span>
                    <span>希望对接行业资源的创业者</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-200">•</span>
                    <span>需要寻找合作伙伴的项目方</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-200">•</span>
                    <span>有融资需求的初创公司</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-5">
                <h3 className="mb-2 text-lg font-semibold text-emerald-200">如何获得内推服务？</h3>
                <p className="text-sm text-zinc-200">
                  内推服务是企业版专享服务。购买企业版后，我们会根据您的业务需求，提供精准的客户推荐和资源对接服务。
                </p>
                <a
                  href="#contact"
                  className="mt-4 inline-block rounded-full bg-white px-5 py-2 text-sm font-semibold text-black transition hover:bg-zinc-200"
                >
                  咨询企业版
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 联系方式 */}
        <section
          id="contact"
          className="grid gap-4 rounded-2xl border border-white/10 bg-gradient-to-br from-emerald-500/10 via-white/5 to-white/0 p-6 shadow-xl"
        >
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-white">咨询与联系方式</h2>
            <span className="text-sm text-zinc-300">工作日 10:00 - 19:00</span>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-300">
              QQ / 微信
            </p>
            <p className="mt-2 font-semibold text-white">
              QQ：2726087639
            </p>
            <p className="font-semibold text-white">
              微信：chopin1000
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
