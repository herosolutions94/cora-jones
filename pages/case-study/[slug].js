import Cta from "@/components/cta";
import React from "react";

const Detail = () => {
  return (
    <>
      {/* ==== */}
      <section className="case_detail">
        <div className="contain">
          <div className="top_area">
            <div className="sec_heading">
              <h1>Accelerating LLM Onboarding</h1>
              <p>
                From LLM onboarding to scalable compliance — real results
                delivered for federal and enterprise systems.
              </p>
            </div>
            <div className="image_o">
              <img src="/images/fer-1.png" alt="" />
            </div>
          </div>
          <div className="flex">
            <div className="col1">
              <div className="inner_card">
                <div className="block">
                  <h4>Introduction</h4>
                  <p>
                    Artificial Intelligence (AI) has emerged as a transformative
                    force in the healthcare industry, reshaping patient care,
                    diagnostics, and research. In this blog post, we explore the
                    profound impact of AI in healthcare, from revolutionizing
                    diagnostic accuracy to enhancing patient outcomes.
                  </p>
                </div>
                <div className="block">
                  <h4>Artificial Intelligence (AI)</h4>
                  <p>
                    Artificial Intelligence (AI) has permeated virtually every
                    aspect of our lives, and healthcare is no exception. The
                    integration of AI in healthcare is ushering in a new era of
                    medical practice, where machines complement the capabilities
                    of healthcare professionals, ultimately improving patient
                    outcomes and the efficiency of the healthcare system. In
                    this blog post, we will delve into the diverse applications
                    of AI in healthcare, from diagnostic imaging to personalized
                    treatment plans, and address the ethical considerations
                    surrounding this revolutionary technology.
                  </p>
                  <p>
                    Artificial Intelligence (AI) has permeated virtually every
                    aspect of our lives, and healthcare is no exception. The
                    integration of AI in healthcare is ushering in a new era of
                    medical practice, where machines complement the capabilities
                    of healthcare professionals, ultimately improving patient
                    outcomes and the efficiency of the healthcare system. In
                    this blog post, we will delve into the diverse applications
                    of AI in healthcare, from diagnostic imaging to personalized
                    treatment plans, and address the ethical considerations
                    surrounding this revolutionary technology.
                  </p>
                </div>
                <div className="block">
                  <h4>Predictive Analytics and Disease Prevention</h4>
                  <p>
                    One of the most prominent applications of AI in healthcare
                    is in diagnostic imaging. AI algorithms have demonstrated
                    remarkable proficiency in interpreting medical images such
                    as X-rays, MRIs, and CT scans. They can identify anomalies
                    and deviations that might be overlooked by the human eye.
                    This is particularly valuable in early disease detection.
                    For instance, AI can aid radiologists in detecting minute
                    irregularities in mammograms or identifying critical
                    findings in chest X-rays, potentially indicative of
                    life-threatening conditions.
                  </p>
                </div>
              </div>
            </div>
            <div className="col2">
              <ul className="mini_btn">
                <li>
                  <div className="icons">
                    <img src="/images/ic-1.png" alt="" />
                  </div>
                  <p>24.5k</p>
                </li>
                <li>
                  <div className="icons">
                    <img src="/images/ic-2.png" alt="" />
                  </div>
                  <p>50k</p>
                </li>
                <li>
                  <div className="icons">
                    <img src="/images/ic-3.png" alt="" />
                  </div>
                  <p>206</p>
                </li>
              </ul>
              <ul className="listings">
                <li>
                  <p>Publication Date</p>
                  <h6>October 15, 2023</h6>
                </li>
                <li>
                  <p>Publication Date</p>
                  <h6>October 15, 2023</h6>
                </li>
                <li>
                  <p>Publication Date</p>
                  <h6>October 15, 2023</h6>
                </li>
                <li>
                  <p>Publication Date</p>
                  <h6>October 15, 2023</h6>
                </li>
              </ul>
              <div className="tab_content">
                <h5>Table of Contents</h5>
                <ul className="list">
                  <li>Introduction</li>
                  <li>AI in Diagnostic Imaging</li>
                  <li>Predictive Analytics and Disease Prevention</li>
                  <li>Personalized Treatment Plans</li>
                  <li>Drug Discovery and Research</li>
                  <li>AI in Telemedicine</li>
                  <li>Ethical Considerations</li>
                  <li>The Future of AI in Healthcare</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="sec_innovate">
        <div className="contain">
          <div className="inner_card">
            <div className="cmn_heading">
              <div className="title">
                <h5>Learn, Connect, and Innovate</h5>
              </div>
              <h2>Be Part of the Future Tech Revolution</h2>
            </div>
            <div className="sec_content">
              <p>
                Immerse yourself in the world of future technology. Explore our
                comprehensive resources, connect with fellow tech enthusiasts,
                and drive innovation in the industry. Join a dynamic community
                of forward-thinkers.
              </p>
            </div>
            <div className="flex flexRow">
              <div className="cols">
                <div className="inner">
                  <h5>Resource Access</h5>
                  <p>
                    Visitors can access a wide range of resources, including
                    ebooks, whitepapers, reports.
                  </p>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <h5>Community Forum</h5>
                  <p>
                    Join our active community forum to discuss industry trends
                    and collaborate with peers.
                  </p>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <h5>Tech Events</h5>
                  <p>
                    Stay updated on upcoming tech events, webinars and
                    conferences to enhance your knowledge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
};

export default Detail;
