import React from "react";
import Slider from "react-slick";
// Custom Arrows
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow next-arrow" onClick={onClick}>
      <img src="images/next.svg" alt="Next" />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="custom-arrow prev-arrow" onClick={onClick}>
      <img src="images/back.svg" alt="Previous" />
    </div>
  );
}
const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
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
          slidesToShow: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 1000,
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
    <>
      <section className="sec_testimonials">
        <div className="contain">
          <div className="cmn_heading">
            <div className="title">
              <h5>Success Stories Using This Service</h5>
            </div>
            <h2>What Our Client Say About Us</h2>
          </div>
          <Slider {...settings}>
            <div className="item">
              <div className="inner">
                <div className="text">
                  <h5>
                    “Cora and her team helped us launch a compliant AI platform
                    for federal operations in record time — with zero downtime
                    and full audit traceability.”
                  </h5>
                  <p>— Director of Data Engineering, IRS</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <div className="text">
                  <h5>
                    “Cora and her team helped us launch a compliant AI platform
                    for federal operations in record time — with zero downtime
                    and full audit traceability.”
                  </h5>
                  <p>— Director of Data Engineering, IRS</p>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="inner">
                <div className="text">
                  <h5>
                    “Cora and her team helped us launch a compliant AI platform
                    for federal operations in record time — with zero downtime
                    and full audit traceability.”
                  </h5>
                  <p>— Director of Data Engineering, IRS</p>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
