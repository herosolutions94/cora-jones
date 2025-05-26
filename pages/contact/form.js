import Link from "next/link";
import React from "react";

const Form = () => {
  return (
    <>
      <section className="contact_form">
        <div className="contain">
          <div className="main_heading">
            <h2>We are ready to assist</h2>
          </div>
          <div className="flex">
            <div className="col1">
              <div className="inner_card">
                <div className="image_o">
                  <img src="images/contact.png" alt="" />
                </div>
                <div className="content">
                  <p>
                    Whether you're looking for fractional leadership, advisory
                    support, or a speaker on AI and Cloud transformation — I’d
                    love to hear from you.
                  </p>
                  <ul>
                    <li>
                      <div className="icons">
                        <img src="images\location.svg" alt="" />
                      </div>
                      <div className="text">
                        <p>Remote-Friendly · Based in Charlotte, NC</p>
                      </div>
                    </li>
                    <li>
                      <div className="icons">
                        <img src="images\envelope.svg" alt="" />
                      </div>
                      <div className="text">
                        <Link href="">architectingscale.com</Link>
                      </div>
                    </li>
                  </ul>
                  <p>
                    <strong>Remote-Friendly:</strong> Available for virtual or
                    hybrid engagements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col2">
              <form action="">
                <div className="row">
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="text"
                        placeholder="First Name"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="txtGrp">
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <input
                        type="text"
                        placeholder="Work Email"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <input
                        type="text"
                        placeholder="Subject"
                        className="input"
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <textarea
                        name=""
                        id=""
                        placeholder="Please provide details on your project."
                        className="input"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="txtGrp">
                      <p>
                        By submitting this form, your information will be
                        processed in accordance with our Privacy Policy.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="buTn">
                      <button className="site_btn">Submit</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
