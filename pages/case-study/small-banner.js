import Link from "next/link";
import React from "react";
const SmallBanner = () => {
  return (
    <>
      <section className="sec_smallBanner case_banner_mst">
        <div className="contain">
          <div className="inside wide_inside">
            <div className="main_heading">
              <h1>Architecting Enterprise-Grade GenAI: Case Studies With Measurable ROI</h1>
            </div>
            {/* <div className="sec_content">
              <p>
                Explore how Cora has delivered transformational outcomes across
                AI systems, cloud infrastructure, and enterprise
                operations—<strong>driving results with measurable value.</strong>
              </p>
            </div>
            <ul className="cta">
              <li>
                <Link href="/contact" className="site_btn white">
                  Request Consultation<i className="fas fa-arrow-right"></i>
                </Link>
              </li>
            </ul> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default SmallBanner;
