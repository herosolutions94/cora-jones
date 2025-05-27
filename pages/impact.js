import React from "react";
import Results from "./impact/results";
import Cta from "@/components/cta";
import Transformation from "./impact/transformation";
import Reliable from "./impact/reliable";
import Performance from "./impact/performance";
import Testimonials from "@/components/testimonials";
import Win from "./impact/win";
import Strategy from "./impact/strategy";

const Impact = () => {
  return (
    <>
      <Results />
      <Win />
      <Transformation />
      <Strategy />
      <Reliable />
      <Performance />
      <Testimonials />
      <Cta />
    </>
  );
};

export default Impact;
