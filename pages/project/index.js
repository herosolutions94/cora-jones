import React from "react";
import Link from "next/link";
import Cta from "@/components/cta";
import FAQ from "@/components/faq";


export default function Projects() {
  return (
    <div>
      <main>
        <section id="smallbanner"className="services_banner project_banner">
          <div className="contain">
            <div className="text-center sec_heading">
              <h1>Featured Projects</h1>
              <h4>
                A proven track record of building secure, scalable AI and cloud
                solutions for federal and enterprise teams.
              </h4>
              <p>
                With over two decades of experience, I’ve led the architecture
                and delivery of mission-critical AI infrastructure projects for
                organizations including the IRS, GSA, and Wells Fargo. Below are
                some featured engagements that showcase measurable results,
                technical depth, and compliance-forward solutions in action.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="sec_projects ">
          <div className="contain">
            <div className="flex two_cols">
              <div className="cols">
                <div className=" inner_block outer_blk project_blk_outer">
                  <div className="image_o">
                    <img src="/images/p1.png" alt="" />
                  </div>
                  <div className="text">
                    <div className="btn_blk">
                      <Link href="" className="site_btn">
                        IRS
                      </Link>
                    </div>
                    <div className="sec_heading">
                      <h3>Bedrock LLM Platform</h3>
                    </div>
                    <p>
                     Led a multi-year migration from on-prem to hybrid-cloud architecture, improving model training efficiency by 45%.
                    </p>

                    <div className="impact">
                      <ul className="listing">
                        <li>60% faster LLM onboarding</li>
                        <li>
                          Audit-Ready Pipeline
                        </li>
                        <li>Government-grade security</li>
                      </ul>
                    </div>
                    <div className="cta1">
                      <Link href="/project/detail" className="">
                        Read More <i class="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className=" inner_block outer_blk project_blk_outer">
                  <div className="image_o">
                    <img src="/images/p2.png" alt="" />
                  </div>
                  <div className="text">
                    <div className="btn_blk">
                      <Link href="" className="site_btn">
                        GSA
                      </Link>
                    </div>
                    <div className="sec_heading">
                      <h3>Semantic Enrichment Pipeline</h3>
                    </div>
                    <p>
                      Developed a FedRAMP-compliant AI pipeline for secure data classification across 5+ agencies.
                    </p>

                    <div className="impact">
                      <ul className="listing">
                        <li>I3x faster data classification</li>
                        <li>80% search accuracy improvement</li>
                        <li>Compliant LLM integration</li>
                      </ul>
                    </div>
                    <div className="cta1">
                      <Link href="/project/detail" className="">
                        Read More <i class="fa-solid fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex inner_block outer_blk single_block">
                  <div className="col2">
                <div className="image">
                  <img src="/images/sd1.png" alt="" />
                </div>
              </div>
              <div className="col1">
                <div className="btn_blk">
                  <Link href="" className="site_btn">
                    Wells Fargo
                  </Link>
                </div>
                <div className="sec_heading">
                  <h3>AI-Driven Fraud Detection</h3>
                </div>
                <p>
                  Enabled LLM-based document parsing for 1.2M+ customer forms monthly, reducing manual review time by 60%.
                </p>

                <div className="impact">
                  <ul className="listing">
                    <li>$50M+ fraud prevented</li>
                    <li>99.9% pipeline uptime</li>
                    <li>50+ MLOps workflows deployed</li>
                  </ul>
                </div>
                <div className="cta1">
                  <Link href="/project/detail" className="">
                    Read More <i class="fa-solid fa-arrow-right"></i>
                  </Link>
                </div>
              </div>
          
            </div>
          </div>
        </section>

        <section id="capabilities">
          <div className="contain">
            <div className="text-center cmn_heading">
              <div className="title">
                <h5>Core Capabilities</h5>
              </div>
              <h2>Bridging strategy with technical depth</h2>
            </div>
            <div className="flex">
              <div className="cols">
                <div className="icon outer_blk">
                  <img src="images/c1.png" />
                </div>
                <div className="text">
                  <h4>AI/ML Strategy</h4>
                  <p>
                    Translating business problems into intelligent systems using
                    supervised learning, LLMs, and decision modeling.
                  </p>
                </div>
              </div>
              <div className="cols">
                <div className="icon outer_blk">
                  <img src="images/c2.png" />
                </div>
                <div className="text">
                  <h4>Cloud-Native Architecture</h4>
                  <p>
                    Designing scalable, secure systems on AWS, Azure, and GCP
                    with automated deployment and fault tolerance.
                  </p>
                </div>
              </div>
              <div className="cols">
                <div className="icon outer_blk">
                  <img src="images/c3.png" />
                </div>
                <div className="text">
                  <h4> Security & Compliance</h4>
                  <p>
                    Embedding enterprise-grade security controls that meet
                    federal standards like FedRAMP, HIPAA, and SOC 2.
                  </p>
                </div>
              </div>
              <div className="cols">
                <div className="icon outer_blk">
                  <img src="images/c4.png" />
                </div>
                <div className="text">
                  <h4>Data Engineering & Pipelines</h4>
                  <p>
                    Building real-time and batch data pipelines for actionable
                    insights using modern data tools and cloud services.
                  </p>
                </div>
              </div>
              <div className="cols">
                <div className="icon outer_blk">
                  <img src="images/c5.png" />
                </div>
                <div className="text">
                  <h4>Intelligent Document Processing</h4>
                  <p>
                    Deploying AI-powered solutions for automated tagging,
                    classification, and search across large document sets.
                  </p>
                </div>
              </div>
              <div className="cols">
                <div className="icon outer_blk">
                  <img src="images/c6.png" />
                </div>
                <div className="text">
                  <h4> API & Platform Integration</h4>
                  <p>
                    Creating clean, scalable APIs and seamless platform
                    integrations across legacy and cloud-native environments.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="history" className="tools">
          <div className="contain ">
            <div className="sec_heading cmn_heading">
              <div className="title">
                <h5>Tools Used</h5>
              </div>
              <h2>Technologies & Tools Used</h2>
            </div>
            <ul>
              <li>
                <h2>AI Infrastructure & Model Deployment</h2>
                <div className="text">
                  <p>
                    We utilize powerful tools like
                    <a href="#"> AWS Bedrock</a> and
                    <a href="#"> Amazon SageMaker</a> to deploy and scale
                    foundational models across secure, enterprise-ready
                    infrastructure. These platforms ensure reliable uptime,
                    model versioning, and fine-tuned performance — all with
                    compliance and traceability at the core.
                  </p>
                </div>
              </li>

              <li>
                <h2>Cloud-Native Orchestration</h2>
                <div className="text">
                  <p>
                    Our deployments run on
                    <a href="#"> Kubernetes (EKS)</a> to achieve resilient,
                    containerized workflows at scale. From automated scaling to
                    robust rollout strategies, EKS allows for secure and
                    efficient ML workload orchestration — whether for
                    public-sector pipelines or enterprise-grade LLM systems.
                  </p>
                </div>
              </li>

              <li>
                <h2>LLM Frameworks & Pipelines</h2>
                <div className="text">
                  <p>
                    We work with cutting-edge frameworks like
                    <a href="#"> LangChain </a> and
                    <a href="#"> HuggingFace </a> Transformers to build
                    composable, modular LLM applications. These tools enable
                    rapid experimentation, governance, and observability —
                    turning custom language models into production-ready
                    systems.
                  </p>
                </div>
              </li>

              <li>
                <h2>CI/CD For MLOps</h2>
                <div className="text">
                  <p>
                    Robust CI/CD pipelines are essential to ML operations. We’ve
                    implemented end-to-end workflows using
                    <a href="#"> GitHub Actions </a>,<a href="#"> CircleCI </a>, and
                    infrastructure-as-code tooling. These systems ensure rapid,
                    reproducible deployments with built-in security and rollback
                    mechanisms.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section id="faq_sec">
          <div className="contain">
            <div className="cmn_heading text-center sec_heading">
              <div className="title">
                <h5>Frequently Asked Questions</h5>
              </div>
              <h2>
                Pre-emptively answer questions about project types,
                availability, timeline, etc
              </h2>
            </div>
            <FAQ />
          </div>
        </section>

        <Cta />
      </main>
    </div>
  );
}
