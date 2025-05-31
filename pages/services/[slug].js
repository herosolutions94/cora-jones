import React from "react";
import Link from "next/link";
import Slider from "react-slick";
import Cta from "@/components/cta";
import Testimonials from "@/components/testimonials";

// Custom Arrows
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <img src="/images/next.svg" alt="Next" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <img src="/images/back.svg" alt="Previous" />
    </div>
  );
}

export default function Detail() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
    margin: 10,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          arrows: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
    ],
  };
  return (
    <main>
      <section id="smallbanner" className="detailpg">
        <div className="contain">
          <div className="flex two_cols">
            <div className="cols">
              <h1>AI Infrastructure Strategy</h1>
              <p>Designing scalable, secure systems for enterprise-grade AI.</p>
            </div>
            <div className="cols">
              <div className="image">
                <img src="/images/d1.png" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="offer">
        <div className="contain">
          <div className="sec_heading text-center cmn_heading">
            <div className="title">
              <h5>What We Offer</h5>
            </div>
            <h2>
              We help enterprise and government teams architect AI systems that
              scale
            </h2>
            <p>
              We help enterprise and government teams architect AI systems that
              scale — from initial framework design to production-grade
              infrastructure. Our approach is built around modularity,
              compliance, and reliability, tailored to complex environments.
            </p>
          </div>
        </div>
      </section>

      <section id="compliance">
        <div className="contain">
          <div className=" outer_blk">
            <div className="sec_heading">
              <h2>Compliance-Ready, Scalable, and High-Trust Systems</h2>
              <p>Certifications, Compliance & Real-World Throughput</p>
            </div>
            <div className="flex">
              <div className="cols">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/cp1.png" />
                  </div>
                  <h3>Modular AI system design</h3>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/cp2.png" />
                  </div>
                  <h3>Multi-cloud & hybrid cloud readiness</h3>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/cp3.png" />
                  </div>
                  <h3>CI/CD for ML pipelines</h3>
                </div>
              </div>
              <div className="cols">
                <div className="inner">
                  <div className="icon">
                    <img src="/images/cp4.png" />
                  </div>
                  <h3>High-throughput model hosting</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="success">
        <div className="contain">
          <h2>What Success Looks Like</h2>
          <div className=" outer_blk">
            <div className="flex">
              <div className="cols">
                <h4>60%</h4>
                <p>Faster LLM deployment</p>
              </div>
              <div className="cols">
                <h4>FedRAMP</h4>
                <p>Ready architecture</p>
              </div>
              <div className="cols">
                <h4>$3M</h4>
                <p>Annual cloud cost savings</p>
              </div>
              <div className="cols">
                <h4>99.9%</h4>
                <p>Infrastructure uptime</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="results">
        <div className="contain">
          <div className="sec_heading text-center cmn_heading">
            <div className="title">
              <h5>Real Results in Action</h5>
            </div>
            <h2>Projects Leveraging AI Infrastructure Strategy</h2>
          </div>
          <Slider {...settings}>
            <div className="item">
              <div className="inner outer_blk">
                <div className="image">
                  <img src="/images/r1.png" />
                </div>
                <h4>Bedrock LLM Platform</h4>
                <p>Designed secure cloud-native infra for LLM onboarding</p>
                <Link href="" className="">
                  Read More <i class="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
            <div className="item">
              <div className="inner outer_blk">
                <div className="image">
                  <img src="/images/r2.png" />
                </div>
                <h4>Bedrock LLM Platform</h4>
                <p>Designed secure cloud-native infra for LLM onboarding</p>
                <Link href="" className="">
                  Read More <i class="fa-solid fa-arrow-right"></i>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      <section id="approach">
        <div className="contain">
          <div className="flex flex1">
            <div className="colL">
              <div className="flex">
                <div className="cols">
                  <div className="outer_blk sm_outer">
                    <h4>Assessment & Planning</h4>
                    <p>Evaluate existing systems and opportunities</p>
                  </div>
                </div>

                <div className="cols">
                  <div className="outer_blk sm_outer">
                    <h4>Design & Prototyping</h4>
                    <p>Architect infrastructure blueprints</p>
                  </div>
                </div>
                <div className="cols">
                  <div className="outer_blk sm_outer">
                    <h4>Governance & Handoff</h4>
                    <p>Ensure compliance, continuity, and knowledge transfer</p>
                  </div>
                </div>
                <div className="cols">
                  <div className="outer_blk sm_outer">
                    <h4>Implementation & Optimization</h4>
                    <p>Deploy and refine scalable AI environments</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="colr">
              <h2>Our Approach</h2>
              <p>
                We align technical design with business impact, using a proven
                phased model
              </p>
              <div className="btn_blk">
                <Link href="" className="site_btn">
                  Let’s Connect
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
      <Cta />
    </main>
  );
}
