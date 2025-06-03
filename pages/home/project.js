import Link from "next/link";
import React from "react";
const Project = () => {
  return (
    <>
      <section className="sec_projects">
        <div className="contain">
          <div className="head two_cols">
            <div className="cols">
              <div className="cmn_heading">
                <div className="title">
                  <h5>Featured Projects</h5>
                </div>
                <h2>Strategic Impact at Scale</h2>
              </div>
            </div>
            <div className="cols hide_cell_mst">
              <div className="cta">
                <Link href="/project" className="site_btn">
                  View All Projects
                </Link>
              </div>
            </div>
          </div>
          <div className="flex inner_block">
            <div className="col1">
              <div className="sec_heading">
                <h3>IRS – Bedrock LLM Platform</h3>
              </div>
              <ul className="info">
                <li>
                  <strong>Problem:</strong> IRS needed a secure LLM
                  infrastructure for sensitive taxpayer data across agencies.
                </li>
                <li>
                  <strong>What I Did:</strong> Led architecture design of a multi-region AWS Bedrock infrastructure with secure audit logging, MLflow versioning, and CI/CD automation, ensuring compliance with FedRAMP.
                </li>
              </ul>
              <div className="impact">
                <h6>Impact:</h6>
                <ul className="listing">
                  <li>60% faster onboarding</li>
                  <li>99.9% CI/CD uptime</li>
                  <li>FedRAMP Compliant</li>
                </ul>
              </div>
              <div className="cta1">
                <Link href="/project/detail" className="site_btn">
                  Let’s Build Together
                </Link>
              </div>
            </div>
            <div className="col2">
              <div className="image_o">
                <img src="images/project-1.png" alt="" />
              </div>
            </div>
          </div>
          <div className="flex inner_block">
            <div className="col1">
              <div className="sec_heading">
                <h3>GSA — Semantic Enrichment Pipeline</h3>
              </div>
              <ul className="info">
                <li>
                  <strong>Problem:</strong> Manual metadata tagging created bottlenecks in procurement data searchability.
                </li>
                <li>
                  <strong>What I Did:</strong> Built a cloud-native semantic enrichment pipeline using NLP and vector search.
                </li>
              </ul>
              <div className="impact">
                <h6>Impact:</h6>
                <ul className="listing">
                  <li>$1.5M saved in manual labor</li>
                  <li>80% faster data retrieval</li>
                  <li>“Audit Ready” pipeline with traceability</li>
                </ul>
              </div>
              <div className="cta1">
                <Link href="/project/detail" className="site_btn">
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="col2">
              <div className="image_o">
                <img src="images/project-2.png" alt="" />
              </div>
            </div>
          </div>

          <div className="cols show_cell_mst">
              <div className="cta">
                <Link href="/project" className="site_btn">
                  View All Projects
                </Link>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Project;
