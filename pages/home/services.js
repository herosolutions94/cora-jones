import React from "react";
import Slider from "react-slick";

// Custom Arrows
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <img src="/images/Next.svg" alt="Next" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <img src="/images/Back.svg" alt="Previous" />
    </div>
  );
}

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
        breakpoint: 912,
        settings: {
          slidesToShow: 1,
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
    <section className="sec_services">
      <div className="contain">
        <div className="cmn_heading">
          <div className="title">
            <h5>Consulting Services</h5>
          </div>
          <h2>Empowering Scalable, Compliant AI and Cloud</h2>
        </div>
        <Slider {...settings}>
          <div className="item">
            <div className="inner">
              <div className="image">
                <img src="images/ser_1.png" alt="" />
              </div>
              <div className="text">
                <h5>AI Infrastructure Strategy</h5>
                <p>
                  Designing secure and scalable AI platforms tailored for
                  enterprise and public-sector deployment.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <div className="image">
                <img src="images/ser_2.png" alt="" />
              </div>
              <div className="text">
                <h5>Cloud-Native ML Enablement</h5>
                <p>
                  Deploying ML in cloud-first environments with best practices
                  and automation.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <div className="image">
                <img src="images/ser_1.png" alt="" />
              </div>
              <div className="text">
                <h5>AI Infrastructure Strategy</h5>
                <p>
                  Designing secure and scalable AI platforms tailored for
                  enterprise and public-sector deployment.
                </p>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <div className="image">
                <img src="images/ser_2.png" alt="" />
              </div>
              <div className="text">
                <h5>Cloud-Native ML Enablement</h5>
                <p>
                  Deploying ML in cloud-first environments with best practices
                  and automation.
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default Services;
