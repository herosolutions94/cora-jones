import React from "react";

const Transform = () => {
  return (
    <>
      <section className="sec_transform">
        <div className="contain">
          <div className="cmn_heading">
            <div className="title">
              <h5>Transformation</h5>
            </div>
            <h2>System Architecture & Measurable Transformation</h2>
          </div>
          <div className="flex">
            <div className="col1">
              <div className="text">
                <p>
                  The value of architecture is best seen in what it enables.
                  These diagrams and metrics highlight the secure, scalable
                  infrastructure Cora has designed to accelerate AI delivery and
                  ensure compliance in high-stakes environments.
                </p>
              </div>
            </div>
            <div className="col2">
              <div className="inner_card">
                <div className="cols">
                  <ul>
                    <li>
                      <div className="head">
                        <h5>Before</h5>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>LLM onboarding took 3+ months</p>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>Manual pipeline audit logging</p>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>Single-region cloud infrastructure</p>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>No model versioning</p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="cols">
                  <ul>
                    <li>
                      <div className="head">
                        <h5>After</h5>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>Reduced to 4 weeks (60% faster)</p>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>Automated, audit-ready logging</p>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>Multi-region HA with 99.9% uptime</p>
                      </div>
                    </li>

                    <li>
                      <div className="body">
                        <p>Version-controlled via MLflow & CI/CD</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <ul className="listings">
            <li>
              <h6>Ingestion</h6>
            </li>
            <li>
              <h6>Bedrock</h6>
            </li>
            <li>
              <h6>EKS Cluster</h6>
            </li>
            <li>
              <h6>Audit Logs</h6>
            </li>
            <li>
              <h6>Access Gateway</h6>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Transform;
