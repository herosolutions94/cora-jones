import Link from "next/link";
import React from "react";

const Featured = () => {
  return (
    <>
      <section className="sec_featured">
        <div className="contain">
          <div className="cmn_heading">
            <div className="title">
              <h5>Featured Case Studies</h5>
            </div>
            <h2>
              A closer look at key initiatives that delivered measurable
              outcomes.
            </h2>
          </div>
          <div className="flex">
            <div className="cols">
              <div className="inner">
                <div className="head">
                  <div className="icons">
                    <img src="images/f-1.png" alt="" />
                  </div>
                  <Link href="/case-study/detail">
                    <h5>LLM Onboarding Acceleration <span>AI Infrastructure & DevOps</span></h5>
                  </Link>
                </div>
                <div className="text">
                  <p>
                    Client: Federal AI Division
                  </p>
                  <ul>
                    <li>Cut onboarding time from <strong>5 weeks → 8.5 days</strong> (↓ 70%)</li>
                    <li>Built <strong>20+ reusable Terraform modules</strong> (IAM, TLS, logging, RBAC)</li>
                    <li>Enabled secure platform access for <strong>8+ AI teams</strong></li>
                    <li>Reduced engineering hours by <strong>180+ per team per cycle</strong></li>
                  </ul>
                </div>
                <div className="link">
                  <Link href="/case-study/detail">
                    Learn More<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="image_o">
                  <img src="images/fer-1.png" alt="" />
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="head">
                  <div className="icons">
                    <img src="images/f-2.png" alt="" />
                  </div>
                  <Link href="/case-study/detail">
                    {" "}
                    <h5>LLM-Powered Fraud Detection <span>AI for Financial Risk & Fraud</span></h5>
                  </Link>
                </div>
                <div className="text">
                  <p>
                    Client: Fortune 100 Financial Platform
                  </p>
                  <ul>
                    <li>Achieved <strong>98.6% model precision</strong>, outperforming legacy rules by 31%</li>
                    <li>Protected <strong>$50M+ in annual exposure</strong> via real-time scoring</li>
                    <li>Deployed across <strong>4 product lines</strong>, with <strong>0 audit gaps</strong> post-implementation</li>
                    <li>Delivered token-level logging across <strong>100K+ daily inference calls</strong></li>
                  </ul>
                </div>
                <div className="link">
                  <Link href="/case-study/detail">
                    Learn More<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="image_o">
                  <img src="images/fer-2.png" alt="" />
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="head">
                  <div className="icons">
                    <img src="images/f-3.png" alt="" />
                  </div>
                  <Link href="/case-study/detail">
                    <h5>CI/CD Modernization for LLM Pipelines <span>MLOps & Deployment Automation</span></h5>
                  </Link>
                </div>
                <div className="text">
                  <p>
                    Client: Enterprise AI Enablement Team
                  </p>
                  <ul>
                    <li>Cut rollback time from <strong>2 hours → 8 minutes</strong> (↓ 93%)</li>
                    <li>Dropped deployment error rate from <strong>15% → {"<"}4.5%</strong></li>
                    <li>Achieved <strong>99.9% SLA</strong> uptime across <strong>5+ product lines</strong></li>
                    <li>Created <strong>25+ hardened modules</strong> for secure release automation</li>
                  </ul>
                </div>
                <div className="link">
                  <Link href="/case-study/detail">
                    Learn More<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="image_o">
                  <img src="images/fer-3.png" alt="" />
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="head">
                  <div className="icons">
                    <img src="images/f-4.png" alt="" />
                  </div>
                  <Link href="/case-study/detail">
                    {" "}
                    <h5>Semantic Feedback Enrichment <span>LegalTech & Semantic Search</span></h5>
                  </Link>
                </div>
                <div className="text">
                  <p>
                    Client: Federal Regulatory Agency
                  </p>
                  <ul>
                    <li>Reduced semantic search latency from <strong>15s → 3.2s</strong></li>
                    <li>Processed <strong>50GB+/day</strong> of unstructured legal content</li>
                    <li>Increased document traceability by <strong>40%+</strong></li>
                    <li>Cut review turnaround from <strong>10 days → {"<"}4.5 days</strong></li>
                  </ul>
                </div>
                <div className="link">
                  <Link href="/case-study/detail">
                    Learn More<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="image_o">
                  <img src="images/fer-4.png" alt="" />
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="head">
                  <div className="icons">
                    <img src="images/f-5.png" alt="" />
                  </div>
                  <Link href="/case-study/detail">
                    <h5>Tokenized Privacy + Audit Infrastructure <span>Data Governance & Compliance</span></h5>
                  </Link>
                </div>
                <div className="text">
                  <p>
                    Client: Multi-Agency AI Program
                  </p>
                  <ul>
                    <li>Enabled <strong>100% lineage traceability</strong> (token to inference to output)</li>
                    <li>Architected for <strong>FedRAMP, HIPAA, FISMA, SOX</strong></li>
                    <li>Onboarded <strong>6 departments</strong> across 3 agencies</li>
                    <li>Secured <strong>12+ model endpoints</strong> with role-based access control</li>
                  </ul>
                </div>
                <div className="link">
                  <Link href="/case-study/detail">
                    Learn More<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="image_o">
                  <img src="images/fer-5.png" alt="" />
                </div>
              </div>
            </div>

            <div className="cols">
              <div className="inner">
                <div className="head">
                  <div className="icons">
                    <img src="images/f-1.png" alt="" />
                  </div>
                  <Link href="/case-study/detail">
                    <h5>Cloud Cost Optimization + FinOps Benchmarking <span>Cloud FinOps & Cost Efficiency</span></h5>
                  </Link>
                </div>
                <div className="text">
                  <p>
                    Client: Enterprise Cloud Platform
                  </p>
                  <ul>
                    <li>Reduced EC2 + EBS waste from <strong>42% → {"<"}9%</strong></li>
                    <li>Standardized infra practices across <strong>12+ business units</strong></li>
                    <li>Delivered <strong>$3M+ in annual savings</strong></li>
                    <li>Created live dashboards consumed by <strong>5 C-suite execs</strong> and <strong>3 finance leads</strong></li>
                  </ul>
                </div>
                <div className="link">
                  <Link href="/case-study/detail">
                    Learn More<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="image_o">
                  <img src="images/fer-1.png" alt="" />
                </div>
              </div>
            </div>

            <div className="cols">
              <div className="inner">
                <div className="head">
                  <div className="icons">
                    <img src="images/f-2.png" alt="" />
                  </div>
                  <Link href="/case-study/detail">
                    {" "}
                    <h5>RAG Deployment With CFR Traceability <span>RAG Systems & Regulatory AI</span></h5>
                  </Link>
                </div>
                <div className="text">
                  <p>
                    Client: U.S. Tax-Focused Platform
                  </p>
                  <ul>
                    <li>Delivered <strong>CFR 48-12–aligned enrichment pipelines</strong></li>
                    <li>Integrated <strong>5+ rollback checkpoints</strong> per model release</li>
                    <li>Enabled <strong>cross-agency audit visibility</strong> within <strong>60 days</strong></li>
                    <li>Powered <strong>multi-org content recall</strong> with {"<"}6s latency across 10M+ records</li>
                  </ul>
                </div>
                <div className="link">
                  <Link href="/case-study/detail">
                    Learn More<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="image_o">
                  <img src="images/fer-2.png" alt="" />
                </div>
              </div>
            </div>

            <div className="cols">
              <div className="inner">
                <div className="head">
                  <div className="icons">
                    <img src="images/f-3.png" alt="" />
                  </div>
                  <Link href="/case-study/detail">
                    <h5>AI Search & Annotation Pipelines <span>AI Search & Data Annotation</span></h5>
                  </Link>
                </div>
                <div className="text">
                  <p>
                    Client: Policy Data Platform
                  </p>
                  <ul>
                    <li>Implemented OpenSearch + SBERT stack with <strong>{"<"}5s query times</strong></li>
                    <li>Processed <strong>180K+ documents/day</strong></li>
                    <li>Drove <strong>2x reviewer throughput</strong></li>
                    <li>Enabled versioned annotation for <strong>12+ federal stakeholder groups</strong></li>
                  </ul>
                </div>
                <div className="link">
                  <Link href="/case-study/detail">
                    Learn More<i className="fas fa-arrow-right"></i>
                  </Link>
                </div>
                <div className="image_o">
                  <img src="images/fer-3.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
