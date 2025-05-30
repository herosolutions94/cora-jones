import TabSection from "@/components/tabs";
import React, { useState } from "react";


const Strategy = () => {

  return (
    <>
      <section className="sec_strategy">
        <div className="contain">
          <div className="cmn_heading">
            <div className="title">
              <h5>Strategic Impact</h5>
            </div>
            <h2>
              Transforming AI and cloud systems with measurable, real-world
              impact.
            </h2>
          </div>
          <div className="sec_content">
            <p>
              Explore how Cora’s strategic leadership delivers measurable
              outcomes in AI innovation, cloud scalability, and enterprise
              transformation.
            </p>
          </div>
          <div className="col2">
       <TabSection />
          </div>
        </div>
      </section>
    </>
  );
};

export default Strategy;
