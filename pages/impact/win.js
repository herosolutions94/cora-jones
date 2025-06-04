import Link from "next/link";
import React from "react";

const Win = () => {
  return (
    <>
      <section className="sec_win">
        <div className="contain">
          <div className="cmn_heading">
            <div className="title">
              <h5>Quick Wins</h5>
            </div>
            <h2>Small Moves. Big Results.</h2>
          </div>
          <div className="inner_card">
            <div className="cols">
              <div className="inner">
                <div className="head">
                  <h2>
                    <strong>65%</strong>
                  </h2>
                </div>
                <div className="text">
                  <h6>Onboarding Speedup</h6>
                  <p>Streamlined LLM deployment pipelines across orgs</p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="head">
                  <h2>
                    <strong>50+</strong>
                  </h2>
                </div>
                <div className="text">
                  <h6>MLOps Pipelines Built</h6>
                  <p>Customized, production-grade MLOps pipelines</p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="head">
                  <h2>
                    <strong>$1.5M</strong>
                  </h2>
                </div>
                <div className="text">
                  <h6>Saved on LLM Ops</h6>
                  <p>Optimized infrastructure to cut recurring costs</p>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="head">
                  <h2>
                    <strong>65%</strong>
                  </h2>
                </div>
                <div className="text">
                  <h6>Model Uptime</h6>
                  <p>Achieved near-zero downtime across critical apps</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec_cta less_sec_cta">
        <div className="contain">
          <div className="inner">
            <div className="cmn_heading">
              <h2>
                Looking to achieve these results in your own organization?
              </h2>
            </div>
            
            <div className="cta">
              <Link href="/contact" className="site_btn">
                Let’s talk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Win;
