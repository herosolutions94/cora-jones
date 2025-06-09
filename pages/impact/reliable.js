import Link from "next/link";
import React from "react";
const Reliable = () => {
  return (
    <>
      <section className="sec_reliable new_reliable_sec">
        <div className="contain">
          <div className="flex reverse_must">
            <div className="col1">
              <div className="image_o">
                <img src="images/rel.png" alt="" />
              </div>
            </div>
            <div className="col2">
              <div className="cmn_heading">
                {/* <div className="title">
                  <h5>Enterprise Reliability</h5>
                </div> */}
                <h2>Quick Overview</h2>
              </div>
              <p>At Infracta™, we deliver <strong>secure, high-performance GenAI infrastructure</strong> built for 
              environments where <strong>compliance is critical</strong> and <strong>failure is not an option</strong>.</p>
              <p>Our cross-functional delivery team includes AI infra engineers, DevSecOps architects, and GRC experts — together supporting:</p>
              <ul>
                <li><strong>20M+ end users</strong> across AI-native platforms</li>
                <li><strong>12+ departments</strong> across federal, fintech, and SaaS</li>
                <li><strong>LLMOps maturity assessments, vector pipeline deployments</strong>, and <strong>audit-ready agent orchestration</strong></li>
              </ul>
              <p>We specialize in aligning <strong>GenAI innovation with governance</strong>, so your systems are <strong>ready to scale — without compromise.</strong></p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reliable;
