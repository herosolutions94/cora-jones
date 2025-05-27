import Cta from "@/components/cta";
import Testimonials from "@/components/testimonials";
import React from "react";
import Capability from "./case-study/capability";
import SmallBanner from "./case-study/small-banner";
import Featured from "./case-study/featured";

const CaseStudy = () => {
  return (
    <>
      <SmallBanner />
      <Featured />
      <Capability />
      <Testimonials />
      <Cta />
    </>
  );
};

export default CaseStudy;
