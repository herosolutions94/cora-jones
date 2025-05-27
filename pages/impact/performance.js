import React from "react";

const Performance = () => {
  return (
    <>
      <section className="sec_perform">
        <div className="contain">
          <div className="cmn_heading">
            <div className="title">
              <h5>Performance & Compliance</h5>
            </div>
            <h2>Recognized for Performance & Compliance</h2>
          </div>
          <div className="flex">
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/pr-1.png" alt="" />
                </div>
                <div className="text">
                  <h5>Audit Ready</h5>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/pr-2.png" alt="" />
                </div>
                <div className="text">
                  <h5>FedRAMP Compliant</h5>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/pr-3.png" alt="" />
                </div>
                <div className="text">
                  <h5>LLM Ops @ 50GB/day</h5>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/pr-4.png" alt="" />
                </div>
                <div className="text">
                  <h5>Zero Trust Architecture</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Performance;
