import React from "react";
import Link from "next/link";
import Cta from "@/components/cta";

export default function About() {
  return (
    <div>
      <main>
        <section id="smallbanner">
          <div className="contain">
            <div className="text-center sec_heading">
              <h1>About Us</h1>
              <h4>Cora Jones — Director of AI & Cloud Architecture</h4>
              <p>
                Good architecture should be both invisible and indispensable.
              </p>
            </div>
          </div>
        </section>
        <section id="aboutme">
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
                    <Link href="" className="site_btn">
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
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
                  To empower organizations with scalable, secure, and compliant
                  AI solutions that drive real-world impact — from faster
                  innovation cycles to measurable operational excellence. We
                  believe that technical leadership should accelerate clarity,
                  trust, and transformation.
                </p>
              </div>
              <div className="inner">
                <h2>Our Vision</h2>
                <p>
                  To shape the future of AI deployment by setting a standard for
                  responsible, cloud-native infrastructure — where every system
                  is auditable, ethical, and architected for resilience. Our
                  goal is to make powerful AI accessible, traceable, and aligned
                  with enterprise and public-sector needs.
                </p>
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
                  <Link href="" className="site_btn">
                    Contact Us
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
