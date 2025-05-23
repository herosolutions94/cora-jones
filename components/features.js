import React from "react";

const Features = () => {
  return (
    <>
      <section className="sec_features">
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
                    <p>Faster LLM onboarding</p>
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
                    <p>Fraud prevented</p>
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
                    <p>CI/CD uptime delivered</p>
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
