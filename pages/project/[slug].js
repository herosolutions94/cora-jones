import Cta from "@/components/cta";
import React from "react";

export default function Detail() {
  return (
    <main>
      <section id="smallbanner" className="prjct-detail">
        <div className="contain">
          <div className="sec_heading text-center">
            <h2>IRS – Bedrock LLM Platform</h2>
            <p>Accelerated AI compliance with 60% faster LLM onboarding</p>
          </div>
          <div className="image">
            <img src="/images/pd1.png" />
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
      <section className="sec_transform sec_transformation">
        <div className="contain">
          <div className="flex">
            <div className="col2">
              <div className="inner_card">
                <ul>
                  <li>
                    <div className="head">
                      <h5>Metric</h5>
                    </div>
                  </li>
                  <li>
                    <div className="head">
                      <h5>Before Implementation</h5>
                    </div>
                  </li>
                  <li>
                    <div className="head">
                      <h5>After Implementation</h5>
                    </div>
                  </li>
                  <li>
                    <div className="body">
                      <p>Onboarding Time</p>
                    </div>
                  </li>
                  <li>
                    <div className="body">
                      <p>8 Weeks</p>
                    </div>
                  </li>
                  <li>
                    <div className="body">
                      <p>3 Weeks</p>
                    </div>
                  </li>
                  <li>
                    <div className="body">
                      <p>Onboarding Time</p>
                    </div>
                  </li>
                  <li>
                    <div className="body">
                      <p>8 Weeks</p>
                    </div>
                  </li>
                  <li>
                    <div className="body">
                      <p>3 Weeks</p>
                    </div>
                  </li>
                  <li>
                    <div className="body">
                      <p>Onboarding Time</p>
                    </div>
                  </li>
                  <li>
                    <div className="body">
                      <p>8 Weeks</p>
                    </div>
                  </li>
                  <li>
                    <div className="body">
                      <p>3 Weeks</p>
                    </div>
                  </li>
                  <li>
                    <div className="body">
                      <p>Onboarding Time</p>
                    </div>
                  </li>
                  <li>
                    <div className="body">
                      <p>8 Weeks</p>
                    </div>
                  </li>
                  <li>
                    <div className="body">
                      <p>3 Weeks</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <h1>testimonial</h1>
      <Cta />
    </main>
  );
}
