import React from "react";
import Cta from "@/components/cta";
import Testimonials from "@/components/testimonials";
import Capability from "./capability";
import Featured from "./featured";
import SmallBanner from "./small-banner";
const Index = () => {
  return (
    <main>
      <SmallBanner />
      <Featured />
      <Capability />
      <Testimonials />
      <Cta />
    </main>
  );
};

export default Index;
