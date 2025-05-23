import Link from "next/link";
import React from "react";
const Cta = () => {
  return (
    <>
      <section className="sec_cta">
        <div className="contain">
          <div className="inner">
            <div className="cmn_heading">
              <div className="title">
                <h5>Get Started</h5>
              </div>
              <h2>
                Available for consulting, fractional leadership, or speaking
              </h2>
            </div>
            <div className="sec_content">
              <p>
                Remote-friendly, open to global partnerships in AI and Cloud.
              </p>
            </div>
            <div className="cta">
              <Link href="" className="site_btn">
                Let’s Connect
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cta;
