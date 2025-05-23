import Link from "next/link";
import React from "react";
const Scalable = () => {
  return (
    <>
      <section className="sec_scalable">
        <div className="contain">
          <div className="flex two_cols">
            <div className="cols col1">
              <ul>
                <li>
                  <div className="inner">
                    <div className="image">
                      <img src="images/sc_1.png" alt="" />
                    </div>
                    <div className="text">
                      <h5>FedRAMP Compliant</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="image">
                      <img src="images/sc_2.png" alt="" />
                    </div>
                    <div className="text">
                      <h5>LLM Ops at 50GB/day</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="image">
                      <img src="images/sc_3.png" alt="" />
                    </div>
                    <div className="text">
                      <h5>Audit-Ready Infrastructures</h5>
                    </div>
                  </div>
                </li>
                <li>
                  <div className="inner">
                    <div className="image">
                      <img src="images/sc_4.png" alt="" />
                    </div>
                    <div className="text">
                      <h5>Multi-Cloud Deployed</h5>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="cols col2">
              <div className="sec_heading">
                <h2>Compliance-Ready, Scalable, and High-Trust Systems</h2>
                <p>Certifications, Compliance & Real-World Throughput</p>
              </div>
              <div className="cta">
                <Link href="" className="site_btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Scalable;
