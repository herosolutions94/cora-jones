import React from "react";
import Link from "next/link";
import Cta from "@/components/cta";

export default function About() {
  const scaleData = [
  {
    title: "Performance at Scale",
    points: [
      "Up to 45% latency reduction",
      "50% cut in retraining cycles",
      "3x faster model rollout across EKS + Bedrock orchestration",
    ],
  },
  {
    title: "Enterprise ROI",
    points: [
      "37% average reduction in cloud and compute costs",
      "$5M+ in investment strategy influenced",
      "2–4 week faster time-to-value",
    ],
  },
  {
    title: "Security & Compliance",
    points: [
      "Delivery in 100% FedRAMP Moderate, HIPAA, SOX, and IRS 48-12 environments",
      "Reduction of pre-deployment audit cycles by 70%+",
    ],
  },
  {
    title: "Multi-Platform Expertise",
    points: [
      "Deployment across 5+ LLM ecosystems",
      "Includes AWS Bedrock, Azure OpenAI, NeMo, LangChain, on-prem RAG stacks",
      "<5s semantic inference latency at 50–100GB/day throughput",
    ],
  },
  {
    title: "Full-Stack Delivery",
    points: [
      "5+ enterprise LLM systems delivered end-to-end",
      "300+ cross-functional team members onboarded",
      "Sub-3 day setup of RBAC, CI/CD, and vector pipelines in live cloud environments",
    ],
  },
];
  return (
    <div>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <div className="text-center sec_heading">
              <h1>About Architecting Scale™</h1>
              <h4>GenAI Infrastructure for Systems That Can’t Fail</h4>
            </div>
          </div>
        </section>
        {/* <section id="aboutme">
          <div className="contain">
            <div className="flex two_cols">
              <div className="cols col">
                <div className="image_o">
                  <img src="images/about.png" />
                </div>
              </div>
              <div className="cols colr">
                <div className="outer_blk">
                  <p>
                    I'm Cora Jones, a consulting AI & Cloud Architecture leader
                    with 10+ years of experience guiding public-sector and
                    enterprise teams through complex machine learning
                    initiatives.
                  </p>
                  <p>
                    My work sits at the intersection of AI infrastructure,
                    compliance-driven NLP, and large-scale transformation
                    projects. I've helped organizations like the IRS, GSA, and
                    Wells Fargo deploy scalable, secure, and auditable AI
                    systems — while maintaining performance and trust at scale.
                  </p>
                  <div className="block">
                    "Good architecture should be both invisible and
                    indispensable."
                  </div>
                  <div className="btn_blk">
                    <Link href="/contact" className="site_btn">
                      Let’s Connect
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="new_abt_sec">
          <div className="contain">
             <div className="cntnt">
              <p><strong>Architecting Scale™ </strong> is a GenAI infrastructure consultancy delivering <strong>regulation-ready, low-latency, multi-agent systems </strong> for high-governance sectors. We are a cross-functional team of 
              AI infrastructure architects, DevSecOps engineers, compliance strategists, and technical 
              program leads with a combined delivery history across <strong>$1B+ in AI- and cloud-related 
              transformation programs</strong></p>
              <p>We build, deploy, and operationalize:</p>
              <ul>
                <li><strong>Production systems serving 20M+ users</strong></li>
                <li><strong>$50M+ in annualized risk mitigation</strong> across fraud, legal, and compliance use cases</li>
                <li><strong>30–45% reduction in model latency</strong> across enterprise GenAI pipelines</li>
                <li><strong>37% infrastructure cost savings</strong> on average per deployment via optimization and orchestration</li>
                <li><strong>6+ Fortune 100 and federal programs</strong>, including IRS, GSA, and global banks</li>
                <li><strong>300+ stakeholders trained</strong> across engineering, security, ops, and risk</li>
                <li><strong>65+ reusable infrastructure modules</strong> built across Bedrock, NeMo, Azure, and on-prem RAG stacks</li>
                <li><strong>$5M+ in infra investment decisions</strong> directly shaped by our advisory work</li>
              </ul>
              <p>Our architecture supports everything from <strong>recursive memory frameworks</strong> to <strong>token-level audit 
              logging</strong>, designed for environments where <strong>uptime, traceability, and regulatory clearance</strong>
              are non-negotiable.</p>
              <p>We don’t just accelerate adoption. <strong>We reduce audit time by 70%, onboarding time by 60%, 
              and deployment cycles by 50%.</strong></p>
             </div>
          </div>
        </section>

        <section className="sec_critical groundup">
          <div className="contain">
            <div className="outer_blk">
              <div className="center_heading cmn_heading groundup_heading">
                <div className="title">
                  <h5>Ground up</h5>
                </div>
                <h2>
                  Building scalable, secure, and compliant AI systems from the
                  ground up.
                </h2>
              </div>
              <div className="flex">
                <div className="cols">
                  <div className="inner">
                    <div className="image">
                      <img src="images/g1.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>AI Infrastructure & Security</h6>
                    </div>
                  </div>
                </div>
                <div className="cols">
                  <div className="inner">
                    <div className="image">
                      <img src="images/g2.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>Cloud-Native ML Systems</h6>
                    </div>
                  </div>
                </div>
                <div className="cols">
                  <div className="inner">
                    <div className="image">
                      <img src="images/g3.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>LLM Governance & Compliance</h6>
                    </div>
                  </div>
                </div>
                <div className="cols">
                  <div className="inner">
                    <div className="image">
                      <img src="images/g4.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>Scalable MLOps Pipelines</h6>
                    </div>
                  </div>
                </div>
                <div className="cols">
                  <div className="inner">
                    <div className="image">
                      <img src="images/g5.png" alt="" />
                    </div>
                    <div className="content">
                      <h6>Executive & Team Enablement</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="history">
          <div className="contain">
            <div className="outer_blk">
              <div className="sec_heading">
                <h2>Our History</h2>
                <p>
                  I believe the best architecture disappears — but leaves behind
                  systems that scale, adapt, and deliver results with integrity.
                  My approach blends technical depth with cross-functional
                  clarity, enabling faster onboarding, measurable outcomes, and
                  audit-readiness from day one.
                </p>
              </div>
              <ul>
                <li>
                  <h2>2021 – Present</h2>
                  <div className="text">
                    <h4>
                      Fractional AI Advisor <span> (IRS, GSA, Fintech)</span>
                    </h4>
                    <p>
                      As a fractional executive, I lead high-impact AI
                      initiatives for federal and financial sector clients,
                      including architecting secure LLM platforms, enabling
                      cloud-native ML pipelines, and building governance systems
                      for compliant AI deployment. I specialize in accelerating
                      time-to-value while ensuring security, traceability, and
                      regulatory alignment.
                    </p>
                  </div>
                </li>
                <li>
                  <h2>2018 – 2021</h2>
                  <div className="text">
                    <h4>
                      Lead Cloud Architect <span>(Federal Tech Firm)</span>
                    </h4>
                    <p>
                      Oversaw enterprise cloud transformation for large-scale
                      public-sector systems, focusing on secure infrastructure,
                      container orchestration (Kubernetes/EKS), and automated
                      CI/CD. Championed modernization efforts that reduced
                      operational overhead and enabled AI integration across
                      multiple government agencies.
                    </p>
                  </div>
                </li>
                <li>
                  <h2>2014 – 2018</h2>
                  <div className="text">
                    <h4>
                      AI Research & Infrastructure{" "}
                      <span>(Healthcare + Public Sector)</span>
                    </h4>
                    <p>
                      Built foundational AI infrastructure to support NLP,
                      predictive modeling, and data enrichment for healthcare
                      and federal programs. Designed secure data pipelines and
                      helped teams adopt machine learning at scale—delivering
                      measurable improvements in operational efficiency and
                      compliance readiness.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section id="missvision">
          <div className="contain">
            <div className="outer_blk">
              <div className="inner">
                <h2>Our Mission</h2>
                <p>
                  To enable enterprise and public-sector organizations to deploy <strong>safe, performant, and 
                  auditable GenAI infrastructure</strong> — at speed and scale.
                </p>
              </div>
              <div className="inner">
                <h2>Our Vision</h2>
                <p>
                  AI systems should be as <strong>accountable and resilient</strong> as they are intelligent. We design 
                  infrastructure that ensures autonomy doesn’t come at the cost of oversight.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="choose_new_sec">
          <div className="contain">
              <div className="cntnt">
                <div className="sec_heading">
                  <h2>Why Clients Choose Architecting Scale™</h2>
                </div>
                <div className="inner_grid">
                  {scaleData.map((item, index) => (
                    <div key={index} className="_card">
                      <h3>{item.title}</h3>
                      <ul>
                        {item.points.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <p>We combine <strong>technical acceleration, governance by design</strong>, and <strong>battle-tested 
                infrastructure patterns</strong> to turn GenAI from prototype to production — faster, cheaper, and 
                safer than your in-house timeline.</p>
              </div>
          </div>
        </section>
        
        <section className="new_abt_ceo">
          <div className="contain">
            <div className="sec_heading">
              <h2>About Our Founder</h2>
              <p><strong>Cora Jones</strong> is the founder and Principal Architect of Architecting Scale™, where she leads 
                    multidisciplinary teams in deploying AI infrastructure at national and global scale.
              </p>
            </div>
            <div className="flex">
              <div className="colL">
                <div className="image_o">
                  <img src="images/about.png" />
                </div>
              </div>
              <div className="colR">
                <div className="inner">
                  
                  <p>
                    Over the past 18 months, her leadership has driven:
                  </p>
                  <ul>
                    <li>$5M+ in advisory-backed infrastructure investment</li>
                    <li>20M+ end users served through real-time inference and orchestration pipelines</li>
                    <li>$50M+ in risk avoidance across AI fraud systems, legal document traceability, and regulatory workflows</li>
                    <li>40+ enterprise-grade architecture documents delivered for Fortune 100s and federal clients</li>
                    <li>65+ Terraform, RBAC, and CI/CD modules shipped for compliant LLM deployment</li>
                    <li>300+ engineers, risk officers, and AI leads trained in GenAI safety, vector architecture, and deployment frameworks</li>
                  </ul>

                  <p>Cora’s career spans federal modernization, global banking, and early-stage innovation. She 
                  ensures every system is engineered for <strong>99.9% uptime, sub-5s latency</strong>, and <strong>token-level 
                  auditability</strong>.</p>
                  <p>But more importantly — she leads a team that delivers.</p>
                  
                  <div className="btn_blk">
                    <Link href="/contact" className="site_btn">
                      Let’s Connect
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="counting">
          <div className="contain">
            <div className="outer_blk">
              <div className="heading">
                <h2>
                  we create a professional product using artificial intelligence
                </h2>
                <div className="btn_blk">
                  <Link href="/contact" className="site_btn">
                    Let’s Connect
                  </Link>
                </div>
              </div>
              <div className="flex">
                <div className="cols">
                  <h4>65%</h4>
                  <p>onboarding speedup</p>
                </div>
                <div className="cols">
                  <h4>50+</h4>
                  <p>MLOps pipelines</p>
                </div>
                <div className="cols">
                  <h4>$1.5M</h4>
                  <p>saved on LLM ops</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Cta />
      </main>
    </div>
  );
}
