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
                Helping teams ship AI faster, more securely, and with traceable
                results means providing the tools, infrastructure, and strategic
                guidance needed to move from prototype to production with
                confidence.
              </p>
            </div>
            <div className="cta">
              <Link href="" className="site_btn white">
                Get Started <i className="fas fa-arrow-right"></i>
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
