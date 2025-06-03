import Link from "next/link";
import React from "react";
const About = () => {
  return (
    <>
      <section className="sec_about">
        <div className="contain">
          <div className="flex two_cols abt_two_cols">
            <div className="cols">
              <div className="cmn_heading">
                <div className="title">
                  <h5>About us</h5>
                </div>
                <h2>Transforming the Future with Responsible AI</h2>
                <p>Scaling AI with Confidence, Compliance, and Clarity.</p>
              </div>
            </div>
            <div className="cols abt_right_col">
              <div className="text">
                <p>
                  Cora Jones is a strategic technology leader with 20+ years of experience in AI infrastructure and enterprise cloud architecture.
                </p>
              </div>
              <div className="cta">
                <Link href="/about" className="site_btn">
                  Read More
                </Link>
              </div>
            </div>
          </div>
          <div className="border_blue_box quote_block">
            <div className="image">
              <img src="images/quote.png" alt="" />
            </div>
            <div className="quote">
              <h3>
                Good architecture should be both invisible and indispensable.
              </h3>
              <p>Cora Jones - CEO</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
