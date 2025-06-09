import React from "react";

const Results = () => {
  return (
    <>
      <section className="sec_result">
        <div className="contain">
          <div className="flex">
            <div className="col1">
              <div className="main_heading">
                <h1>Secure, Scalable, and Audit-Ready GenAI Infrastructure</h1>
              </div>
              <div className="text">
                <p>
                  We architect enterprise-grade AI systems that are <strong>compliant by design, built to scale</strong>, and 
                  engineered for <strong>real-world uptime, traceability, and performance</strong> — across LLM stacks, 
                  legacy modernization, and secure orchestration environments.
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="image_o mrgn_top">
                <img src="images/result.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="core_capabilities_sec">
        <div className="contain">
            <div className="sec_heading">
              <h2>Core Capabilities</h2>
            </div>
            <div className="cntnt">
              <div className="outer_tbl">
                <div className="inner_tbl">
                  <div></div>
                  <div>What We Deliver</div>
                  <div>Outcomes</div>
                </div>
                <div className="inner_tbl">
                  <div>LLM Solutions Architecture</div>
                  <div>
                    <ul>
                      <li>RAG (Retrieval-Augmented Generation)</li>
                      <li>Multi-agent orchestration</li>
                      <li>Explainability layers</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Sub-5 second semantic search across 50GB+ per day</li>
                      <li>Supports 12+ regulatory teams</li>
                    </ul>
                  </div>
                </div>

                <div className="inner_tbl">
                  <div>Secure AI Infrastructure</div>
                  <div>
                    <ul>
                      <li>Terraform Infrastructure as Code (IaC)</li>
                      <li>CI/CD pipelines</li>
                      <li>Bedrock/EKS multi-tenant stacks</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>25+ reusable modules deployed</li>
                      <li>70% boost in onboarding velocity</li>
                    </ul>
                  </div>
                </div>

                <div className="inner_tbl">
                  <div>Semantic Search & Enrichment</div>
                  <div>
                    <ul>
                      <li>Clustering</li>
                      <li>Deduplication</li>
                      <li>CFR (Code of Federal Regulations) traceability pipelines</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li>Legal review time reduced by 3–4 days</li>
                      <li>40% increase in traceable content</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <p>All systems built to <strong>99.9%+ uptime, 0 audit gaps</strong>, and <strong>real-time SLAs</strong></p>

            <div className="border_blue_box quote_block">
              <div className="image">
                <img src="/images/quote.png" alt="" />
              </div>
              <div className="quote">
                <h3>
                  The AI infrastructure expertise from Infracta™ was instrumental. We went from compliance blockers to a fully scalable, secure LLM stack in weeks — with transparency built into every layer.
                </h3>
                <p>— Director of AI Engineering, U.S. Government Agency</p>
              </div>
            </div>

        </div>
      </section>
      <section className="stats_new_pg">
        <div className="contain">
            <div className="flex">
              <div className="col">
                <div className="inner">
                  <h2>$50M+</h2>
                  <p><strong>in risk mitigated</strong> via fraud detection, LLM safety layers, and explainable scoring systems</p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <h2>300+</h2>
                  <p><strong>engineers & GRC teams enabled</strong> with AI onboarding toolkits + live infrastructure walkthroughs</p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <h2>25+</h2>
                  <p><strong>production-grade Terraform modules</strong> reused across Fortune 100 and federal systems</p>
                </div>
              </div>
              
              <div className="col">
                <div className="inner">
                  <h2>{"<"}5s</h2>
                  <p><strong>search latency</strong> for 50GB+ of unstructured legal and policy data</p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <h2>3.6M+</h2>
                  <p><strong>in infra savings delivered</strong> with autoscaling, FinOps dashboards, and redundancy elimination</p>
                </div>
              </div>
              <div className="col">
                <div className="inner">
                  <h2>8+</h2>
                  <p><strong>AI initiatives launched</strong> in FedRAMP and IRS 48-12–aligned environments</p>
                </div>
              </div>
            </div>
        </div>
      </section>

      
    </>
  );
};

export default Results;
