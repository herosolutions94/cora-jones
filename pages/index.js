import React from "react";
import Banner from "./home/banner";
import About from "./home/about";
import Mission from "./home/mission";
import Cta from "@/components/cta";
import Project from "./home/project";
import Scalable from "./home/scalable";
import Services from "./home/services";

const Index = () => {
  return (
    <>
      <main>
        <Banner />
        <About />
        <Mission />
        <Project />
        <Services />
        <Scalable />
        <Cta />
      </main>
    </>
  );
};

export default Index;
