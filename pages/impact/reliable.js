import Link from "next/link";
import React from "react";
const Reliable = () => {
  return (
    <>
      <section className="sec_reliable">
        <div className="contain">
          <div className="flex reverse_must">
            <div className="col1">
              <div className="image_o">
                <img src="images/rel.png" alt="" />
              </div>
            </div>
            <div className="col2">
              <div className="cmn_heading">
                <div className="title">
                  <h5>Enterprise Reliability</h5>
                </div>
                <h2>How It All Works</h2>
              </div>
              <div className="text">
                <p>
                  We design with intent. From cloud-native AI stacks to secure
                  access layers, our solutions are robust, scalable, and
                  traceable.
                </p>
              </div>
              <div className="cta">
                <Link href="/case-study" className="site_btn">
                  View Case Study
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Reliable;
