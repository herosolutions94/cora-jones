import React from "react";
import Cta from "@/components/cta";
import Testimonials from "@/components/testimonials";
import Capability from "./capability";
import Featured from "./featured";
import SmallBanner from "./small-banner";
import Link from "next/link";
const Index = () => {
  return (
    <main>
      <SmallBanner />
      <section className="stats_new_pg case_new_rslt">
        <div className="contain">
          <div className="sec_heading text-center">
            <h2>Results. Repeatable Playbooks</h2>
            <p>From federal platforms to Fortune 100 stacks, our delivery teams have shipped:</p>
          </div>
          <div className="flex">
            <div className="col">
              <div className="inner">
                <h2>20M+</h2>
                <p>end users enabled</p>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <h2>$50M+</h2>
                <p>in risk mitigation achieved</p>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <h2>$3.6M+</h2>
                <p>in cloud cost savings realized</p>
              </div>
            </div>
            
            <div className="col">
              <div className="inner">
                <h2>300+</h2>
                <p>stakeholders trained across engineering, risk, and ops</p>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <h2>99.98%</h2>
                <p>average uptime across 8+ LLM platforms</p>
              </div>
            </div>
            <div className="col">
              <div className="inner">
                <h2>12+</h2>
                <p>compliance frameworks operationalized (FedRAMP, HIPAA, IRS 48-12, FISMA, SOC 2)</p>
              </div>
            </div>
          </div>
          <p>These aren’t experiments. These are production systems—auditable, scalable, and already delivering ROI.</p>
        </div>
      </section>
      <Featured />
      <section className="core_capabilities_sec  case_lss_b_p">
        <div className="contain">
            <div className="sec_heading">
              <h2>Impact Summary: Delivery by the Numbers</h2>
            </div>
            <div className="cntnt">
              <div className="outer_tbl">
                <div className="inner_tbl">
                  <div>KPI</div>
                  <div>Value</div>
                </div>
                <div className="inner_tbl">
                  <div>User Scale Supported</div>
                  <div>
                    20M+
                  </div>
                </div>

                <div className="inner_tbl">
                  <div>Infra Cost Reduction</div>
                  <div>
                    $3.6M+ annually
                  </div>
                </div>

                <div className="inner_tbl">
                  <div>Latency Improvements</div>
                  <div>
                    30–70% depending on stack
                  </div>
                </div>

                <div className="inner_tbl">
                  <div>Model Accuracy Gains</div>
                  <div>
                   Up to 98.6% precision
                  </div>
                </div>


                <div className="inner_tbl">
                  <div>Rollout Velocity Gains</div>
                  <div>
                   60–70% faster go-live
                  </div>
                </div>

                <div className="inner_tbl">
                  <div>Audit Pass Rate</div>
                  <div>
                   100% across 12+ frameworks
                  </div>
                </div>

                <div className="inner_tbl">
                  <div>Reusable Infra Modules</div>
                  <div>
                   50+ across projects
                  </div>
                </div>

                <div className="inner_tbl">
                  <div>Cross-Agency Adoption</div>
                  <div>
                   6+ deployments scaled within 90 days
                  </div>
                </div>

                
              </div>
            </div>
            

            <div className="border_blue_box quote_block">
              <div className="image">
                <img src="/images/quote.png" alt="" />
              </div>
              <div className="quote">
                <h3>
                  Infracta™ helped us go from idea to compliant, scalable GenAI infrastructure in under 6 weeks. We gained zero-downtime rollouts, full token traceability, and a platform now powering 3+ agency use cases.
                </h3>
                <p>— Director of Engineering, U.S. Government Program</p>
              </div>
            </div>

        </div>
      </section>
      <Capability />
      <Testimonials />
      <section className="sec_cta">
        <div className="contain">
          <div className="inner cta_inner_btns">
            <div className="cmn_heading">
              <div className="title">
                <h5>Let’s Connect</h5>
              </div>
              <h2>
                Let’s Architect What’s Next
              </h2>
            </div>
            <div className="sec_content">
              <p>
                If your GenAI stack needs to scale securely, audit cleanly, and launch faster — we’re ready. We don’t prototype — we productionize.
              </p>
            </div>
            <div className="cta btn_blk">
              <Link href="/contact" className="site_btn">
                Contact Our Team
              </Link>
              
              <Link href="/case-study/detail" className="site_btn">
               View Full Case Studies
              </Link>
              <button className="site_btn">
               Request Portfolio PDF
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
