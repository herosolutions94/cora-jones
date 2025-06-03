import React from "react";

const Features = ({ className = "" }) => {
  return (
    <>
      <section className={`sec_features ${className}`}>
        <div className="contain">
          <div className="inner_block">
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <div className="percentage">
                    <p>
                      <strong>60%</strong>
                    </p>
                  </div>
                  <div className="content">
                    <p>Onboarding Speed</p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="percentage">
                    <p>
                      <strong>$50M+</strong>
                    </p>
                  </div>
                  <div className="content">
                    <p>Risk Mitigation</p>
                  </div>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="percentage">
                    <p>
                      <strong>99.9%</strong>
                    </p>
                  </div>
                  <div className="content">
                    <p>Infrastructure Reliability</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
