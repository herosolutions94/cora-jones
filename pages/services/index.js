import React from "react";
import Link from "next/link";
import Cta from "@/components/cta";

export default function Services() {
  return (
    <div>
      <main>
        <section id="smallbanner" className="services_banner">
          <div className="contain">
            <div className="text-center sec_heading">
              <h1>Our Services</h1>
              <h4>
                Fractional Leadership & Technical Consulting for Scalable,
                Secure AI
              </h4>
              <p>
                With 20+ years of experience delivering AI platforms across
                federal and enterprise environments, we provide hands-on
                strategy, architecture, and advisory to teams building
                high-impact systems. Our services are tailored to accelerate
                development, reduce risk, and ensure audit-ready deployments.
              </p>
            </div>
          </div>
        </section>

        <section className="sec_projects service_pg">
          <div className="contain">
            <div className="flex inner_block">
              <div className="col1">
                <div className="sec_heading">
                  <h3>AI Infrastructure Strategy</h3>
                </div>
                <p>
                  We help organizations design scalable, resilient AI
                  infrastructure—from data pipelines to deployment. Whether
                  starting from scratch or modernizing legacy systems, our
                  strategy is rooted in compliance, performance, and
                  adaptability.
                </p>

                <div className="impact">
                  <h6>What’s included:</h6>
                  <ul className="listing">
                    <li>Infrastructure roadmaps (cloud-native & hybrid)</li>
                    <li>Security-first architecture (FedRAMP, HIPAA, SOC2)</li>
                    <li>MLOps & AI lifecycle integration</li>
                    <li>LLM enablement & edge optimization</li>
                  </ul>
                </div>
                <div className="cta1">
                  <Link href="" className="site_btn">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image_o">
                  <img src="images/s1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="flex inner_block">
              <div className="col1">
                <div className="sec_heading">
                  <h3>Cloud-Native ML Enablement</h3>
                </div>
                <p>
                  Accelerate your machine learning programs with modern,
                  cloud-native design. We enable teams to operationalize models
                  quickly, with pipelines optimized for CI/CD, monitoring, and
                  cost-efficiency.
                </p>

                <div className="impact">
                  <h6>What’s included:</h6>
                  <ul className="listing">
                    <li>Kubernetes (EKS, GKE) orchestration</li>
                    <li>Auto-scaling ML pipelines</li>
                    <li>Model serving & inference optimization </li>
                    <li>
                      Toolchain integration (SageMaker, Vertex AI, MLflow)
                    </li>
                  </ul>
                </div>
                <div className="cta1">
                  <Link href="" className="site_btn">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image_o">
                  <img src="images/s2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="flex inner_block">
              <div className="col1">
                <div className="sec_heading">
                  <h3>LLM Governance & Audit Systems</h3>
                </div>
                <p>
                  Ensure Your Large Language Model Deployments Are Ethical,
                  Auditable, and Aligned with Internal Policies. We Build
                  Governance Layers That Enable Safe Experimentation And
                  Scalable Compliance.
                </p>
                <div className="impact">
                  <h6>What’s included:</h6>
                  <ul className="listing">
                    <li>LLM Usage Tracking & Access Control</li>
                    <li>Prompt Policy & Red Teaming</li>
                    <li>Audit-Grade Evaluation Pipelines</li>
                    <li>Human-in-the-Loop Code Implementation</li>
                  </ul>
                </div>
                <div className="cta1">
                  <Link href="" className="site_btn">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image_o">
                  <img src="images/s3.png" alt="LLM Governance" />
                </div>
              </div>
            </div>

            <div className="flex inner_block">
              <div className="col1">
                <div className="sec_heading">
                  <h3>Compliance-Focused NLP Pipelines</h3>
                </div>
                <p>
                  Unlock NLP Capabilities For Regulated Industries. Our
                  Pipelines Are Designed For Privacy, Traceability, And
                  Inspection. We Support Use Cases Like Redaction,
                  Summarization, Semantic Enrichment, And Fraud Detection.
                </p>
                <div className="impact">
                  <h6>What’s included:</h6>
                  <ul className="listing">
                    <li>Secure NLP Processing Workflows</li>
                    <li>Domain-Specific AI Model Training</li>
                    <li>Behavior Tracking & Explainability</li>
                    <li>Compliance Validation & Audit Integration</li>
                  </ul>
                </div>
                <div className="cta1">
                  <Link href="" className="site_btn">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image_o">
                  <img src="images/s4.png" alt="NLP Pipelines" />
                </div>
              </div>
            </div>

            <div className="flex inner_block">
              <div className="col1">
                <div className="sec_heading">
                  <h3>Executive & Team Training</h3>
                </div>
                <p>
                  We Offer High-Trust Technical Education To Executive Teams, AI
                  Practitioners, And Engineering Orgs. Our Workshops Are
                  Designed For Rapid Ramp-Up, Leadership Readiness, And
                  Strategic Impact.
                </p>
                <div className="impact">
                  <h6>What’s included:</h6>
                  <ul className="listing">
                    <li>Strategy Briefings For Leadership</li>
                    <li>LLM Risk Awareness For Non-Technical Teams</li>
                    <li>Live AI Exercises, Demos & Tool Reviews</li>
                    <li>Change Management & Cross-Functional Alignment</li>
                  </ul>
                </div>
                <div className="cta1">
                  <Link href="/detail" className="site_btn">
                    Read More
                  </Link>
                </div>
              </div>
              <div className="col2">
                <div className="image_o">
                  <img
                    src="images/s5.png"
                    alt="Executive Training"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="optionalads">
          <div className="contain">
            <div className="sec_heading">
              <h2>Optional Add-Ons</h2>
            </div>
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <p>Architecture reviews & toolchain assessments</p>
                </div>
              </div>
                <div className="cols">
                <div className="inner">
                  <p>Security posture audits</p>
                </div>
              </div>
                <div className="cols">
                <div className="inner">
                  <p>Fractional CTO or Head of AI services (short-term)</p>
                </div>
              </div>
                <div className="cols">
                <div className="inner">
                  <p>Speaking engagements & public-sector briefings</p>
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
