export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0b1220] via-[#0c1628] to-[#0c0f1a] text-zinc-50 antialiased">
      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:px-10 lg:px-16">
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
                href="#contact"
                className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-zinc-200"
              >
                QQ / 微信咨询
              </a>
              <a
                href="#projects"
                className="rounded-full border border-white/30 px-5 py-3 text-sm font-semibold text-white transition hover:border-white hover:text-white"
              >
                查看项目清单
              </a>
            </div>
            <div className="grid gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 sm:grid-cols-3">
              {[
                { label: "交付方式", value: "源码 + 文档 + 培训" },
                { label: "学习周期", value: "7-14 天快速上手" },
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
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-400">
                  适用场景
                </p>
                <p className="mt-2 text-sm text-zinc-100">
                  跨境出入金、资产托管与多签审批、收益分发、AI 解析与报告生成、实时风控与合规模块。
                </p>
              </div>
            </div>
          </div>
        </section>

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

        <section className="grid gap-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-white">学习周期</h2>
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

        <section className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg">
          <div className="flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-white">购买流程</h2>
            <span className="text-sm text-zinc-400">简单快捷 · 快速交付</span>
          </div>
          <ol className="grid gap-3 text-sm text-zinc-200 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "01 咨询沟通", desc: "了解需求、确认产品版本、确定交付方式。" },
              { title: "02 签订合同", desc: "签署协议、支付款项、准备交付环境。" },
              { title: "03 源码交付", desc: "交付完整源码、技术文档、部署指南。" },
              { title: "04 培训支持", desc: "线上/线下培训、技术答疑、部署指导。" },
            ].map((step) => (
              <li
                key={step.title}
                className="rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-zinc-400">
                  {step.title}
                </p>
                <p className="mt-2 leading-6 text-zinc-100">{step.desc}</p>
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#contact"
              className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-zinc-200"
            >
              立即咨询购买
            </a>
            <span className="text-sm text-zinc-300">
              源码交付 · 7-14 天培训 · 技术支持
            </span>
          </div>
        </section>

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
