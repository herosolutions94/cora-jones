import React from "react";

const Connect = () => {
  return (
    <>
      <section className="sec_critical">
        <div className="contain">
          <div className="center_heading">
            <h2>Why Connect With Me</h2>
          </div>
          <div className="flex">
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/con-1.png" alt="" />
                </div>
                <div className="content">
                  <h6>Enterprise Impact</h6>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/con-2.png" alt="" />
                </div>
                <div className="content">
                  <h6>Collaborative Approach</h6>
                </div>
              </div>
            </div>
            <div className="cols">
              <div className="inner">
                <div className="image">
                  <img src="images/con-3.png" alt="" />
                </div>
                <div className="content">
                  <h6>Tailored Solutions</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Connect;
