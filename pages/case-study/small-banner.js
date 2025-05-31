import Link from "next/link";
import React from "react";
const SmallBanner = () => {
  return (
    <>
      <section className="sec_smallBanner">
        <div className="contain">
          <div className="inside">
            <div className="main_heading">
              <h1>Case Studies in AI & Cloud Excellence</h1>
            </div>
            <div className="sec_content">
              <p>
                Explore how Cora has delivered transformational outcomes across
                AI systems, cloud infrastructure, and enterprise
                operations—driving results with measurable value.
              </p>
            </div>
            <ul className="cta">
              <li>
                <Link href="/contact" className="site_btn">
                  Get in Touch <i className="fas fa-arrow-right"></i>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="site_btn white">
                  Request a Consultation<i className="fas fa-arrow-right"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default SmallBanner;
