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
                    <h5>Accelerating LLM Onboarding <span>Healthcare</span></h5>
                  </Link>
                </div>
                <div className="text">
                  <p>
                    Reduced onboarding time from weeks to days by optimizing AI
                    model deployment workflows.
                  </p>
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
                    <h5>Enhancing Fraud Detection <span>Public Sector</span></h5>
                  </Link>
                </div>
                <div className="text">
                  <p>
                    Improved fraud catch rate from <strong>40%</strong> to <strong>87%</strong> using scalable AI
                    detection systems with ML.
                  </p>
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
                    <h5>CI/CD Infrastructure Revamp <span>AI</span></h5>
                  </Link>
                </div>
                <div className="text">
                  <p>
                    Boosted system reliability to <strong>99.9%</strong> uptime with enhanced
                    cloud-based deployment pipelines.
                  </p>
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
                    <h5>Intelligent Data Routing <span>Healthcare</span></h5>
                  </Link>
                </div>
                <div className="text">
                  <p>
                    Implemented intelligent task distribution across services to
                    cut latency and boost operational speed.
                  </p>
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
                    <h5>AI Service Automation <span>Public Sector</span></h5>
                  </Link>
                </div>
                <div className="text">
                  <p>
                    Deployed NLP-driven chat systems, reducing manual support
                    load by <strong>60%</strong> across enterprise teams.
                  </p>
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
