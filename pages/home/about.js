import Link from "next/link";
import React from "react";
const About = () => {
  return (
    <>
      <section className="sec_about">
        <div className="contain">
          <div className="flex two_cols">
            <div className="cols">
              <div className="cmn_heading">
                <div className="title">
                  <h5>About us</h5>
                </div>
                <h2>Scaling AI with Confidence, Compliance, and Clarity</h2>
              </div>
            </div>
            <div className="cols">
              <div className="text">
                <p>
                  I’m a strategic technology leader with over 20 years of
                  experience in AI infrastructure and cloud architecture.
                </p>
              </div>
              <div className="cta">
                <Link href="" className="site_btn">
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
