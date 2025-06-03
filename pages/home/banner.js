import Features from "@/components/features";
import Link from "next/link";
import React from "react";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="contain">
          <div className="inside">
            <div className="main_heading">
              <h1>
                Helping teams ship AI faster, more securely, and with traceable
                results.
              </h1>
            </div>
            <div className="sec_content">
              <p>
                We architect high-trust, enterprise-grade infrastructure that moves AI from prototype to production — securely and at scale.
              </p>
            </div>
            <div className="cta">
              <Link href="/contact" className="site_btn white">
                Request Consultation <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
            <div className="bottom">
              <Features />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
