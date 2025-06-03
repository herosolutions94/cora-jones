import Cta from "@/components/cta";
import Testimonials from "@/components/testimonials";
import React from "react";


export default function Detail() {
  return (
    <main>
      <section id="smallbanner" className="prjct-detail">
        <div className="contain">
          <div className="sec_heading text-center">
            <h1>IRS – Bedrock LLM Platform</h1>
            <p>Accelerated AI compliance with 60% faster LLM onboarding</p>
          </div>
          <div className="image">
            <img src="/images/sd2.png" />
          </div>
        </div>
      </section>
      <section id="content">
        <div className="contain">
          <div>
            <h4>Project Overview</h4>
            <p>
              This engagement focused on modernizing AI infrastructure for a
              federal agency by deploying a secure, scalable Bedrock-based LLM
              platform. The goal was to enable faster onboarding of models,
              improve operational compliance, and ensure end-to-end traceability
              across ML workflows.
            </p>
          </div>

          <div>
            <h4>The Challenge</h4>
            <p>
              Legacy systems lacked the flexibility and governance required for
              LLM deployment at scale. There were significant bottlenecks in
              onboarding time, security validation, and cross-team
              collaboration, resulting in delayed product rollouts and
              compliance risks.
            </p>
          </div>

          <div>
            <h4>Our Approach</h4>
            <ul>
              <li>
                Architected a secure Bedrock + EKS environment for AI deployment
              </li>
              <li>
                Integrated CI/CD pipelines for automated model lifecycle
                management
              </li>
              <li>Implemented logging and monitoring for audit readiness</li>
              <li>
                Trained internal teams on governance and compliance practices
              </li>
            </ul>
          </div>

          <div>
            <h4>Results & Impact</h4>
            <ul>
              <li>60% faster onboarding of LLM models across environments</li>
              <li>
                $2.5M saved in infrastructure costs through cloud optimization
              </li>
              <li>FedRAMP compliant deployment pipeline established</li>
              <li>3x increase in internal AI delivery velocity</li>
            </ul>
          </div>

          <div>
            <h4>Technologies Used</h4>
            <p>
              AWS Lambda, SageMaker, Kafka, Python, Terraform, CloudWatch, REST
              APIs
            </p>
          </div>
        </div>
      </section>
   <section className="sec_transform sec_transformation trans_prj project_detail_tbl">
        <div className="contain">
        
          <div className="flex">
            <div className="col2">
              <div className="inner_card">
                <div className="cols">
                  <ul>
                    <li>
                      <div className="head">
                        <h5>Metric</h5>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>Onboarding Time</p>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>Compliance Findings</p>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>Manual Review Points</p>
                      </div>
                    </li>
                    <li>
                      <div className="body">
                        <p>Infra Cost (avg/project)</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="cols">
                  <ul>
                    <li>
                      <div className="head">
                        <h5>Before Implementation</h5>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>8 Weeks</p>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p> 4/year</p>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>12</p>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>$180K</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="cols">
                  <ul>
                    <li>
                      <div className="head">
                        <h5>After Implementation</h5>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>3 Weeks</p>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p> 0/year</p>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>4</p>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>$85K</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <Cta />
    </main>
  );
}
