import React, { useState } from "react";
import Tab1 from "./tab1";

const Strategy = () => {
  const [activeTab, setActiveTab] = useState("plate");
  const handleTab = (tab) => {
    setActiveTab(tab);
  };
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
            <ul className="tabs">
              <li className={activeTab === "optimization" ? "active" : ""}>
                <a href="#!" onClick={() => handleTab("optimization")}>
                  AI Optimization
                </a>
              </li>
              <li className={activeTab === "scalability" ? "active" : ""}>
                <a
                  href="#!"
                  className=""
                  onClick={() => handleTab("scalability")}
                >
                  Cloud Scalability
                </a>
              </li>
              <li className={activeTab === "security" ? "active" : ""}>
                <a href="#!" className="" onClick={() => handleTab("security")}>
                  Security Enhancements
                </a>
              </li>
              <li className={activeTab === "integration" ? "active" : ""}>
                <a
                  href="#!"
                  className=""
                  onClick={() => handleTab("integration")}
                >
                  Enterprise Integration
                </a>
              </li>
              <li className={activeTab === "risk" ? "active" : ""}>
                <a href="#!" className="" onClick={() => handleTab("risk")}>
                  Compliance & Risk
                </a>
              </li>
            </ul>
            {activeTab === "optimization" && <Tab1 product="optimization" />}
            {/* {activeTab === "scalability" && <Tab2 product="scalability" />}
            {activeTab === "security" && <Tab3 product="security" />}
            {activeTab === "integration" && <Tab4 product="integration" />}
            {activeTab === "risk" && <Tab5 product="risk" />} */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Strategy;
