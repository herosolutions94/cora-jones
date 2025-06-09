import React from "react";
import Results from "./impact/results";
import Cta from "@/components/cta";
import Transformation from "./impact/transformation";
import Reliable from "./impact/reliable";
import Performance from "./impact/performance";
import Testimonials from "@/components/testimonials";
import Win from "./impact/win";
import Strategy from "./impact/strategy";
import Link from "next/link";

const Impact = () => {
  return (
    <main>
      <Results />
      {/* <Win /> */}
      <Transformation />
      <Strategy />
      <Reliable />
      <Performance />
      <Testimonials />
      <section className="sec_cta">
        <div className="contain">
          <div className="inner cta_inner_btns">
            <div className="cmn_heading">
              <div className="title">
                <h5>Let’s Connect</h5>
              </div>
              <h2>
                Let’s Build Systems That Deliver Outcomes, Not Experiments
              </h2>
            </div>
            <div className="sec_content">
              <p>
                Whether you’re launching your first AI system or scaling across 10+ teams, we’ll architect the infrastructure to make it real, secure, and explainable.
              </p>
            </div>
            <div className="cta btn_blk">
              <Link href="/contact" className="site_btn">
                Schedule a Consultation
              </Link>
              <button type="button" className="site_btn">
                Download Portfolio PDF
              </button>
              <Link href="/contact" className="site_btn">
                Contact Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Impact;
