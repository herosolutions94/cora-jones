import Link from "next/link";
import React from "react";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="contain">
          <div className="flexRow">
            <div className="col">
              <div className="footerLogo">
                <Link href="/">
                  <img src="/images/footer.png" alt="" />
                </Link>
              </div>
              <ul className="infoLst">
                {/* <li>
                  <img src="/images/location.svg" alt="" />
                  <Link href="">
                    7696 Broadway, Suite CLemon Grove, CA 91945
                  </Link>
                </li> */}
                <li>
                  <img src="/images/envelope.svg" alt="" />
                  <Link href="mailto:contact@architectingscale.com">
                    contact@architectingscale.com
                  </Link>
                </li>
                <li>
                  <img src="/images/phone.svg" alt="" />
                  <Link href="tel:(734) 219-6796">(734) 219-6796</Link>
                </li>
              </ul>
              <div className="flex">
                <h4>Follow Us</h4>
                <ul className="social flex">
                  <li>
                    <Link href="?" style={{ display: "block" }}>
                      <img src="/images/social-instagram.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href="?" style={{ display: "block" }}>
                      <img src="/images/social-facebook.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href="?" style={{ display: "block" }}>
                      <img src="/images/social-youtube.svg" alt="" />
                    </Link>
                  </li>
                  <li>
                    <Link href="?" style={{ display: "block" }}>
                      <img src="/images/social-twitter.svg" alt="" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col">
              <h4>About Company</h4>
              <p>
                I’m a strategic technology leader with over 20 years of
                experience in AI infrastructure and cloud architecture.
              </p>
            </div>
            <div className="col">
              <h4>Quick Links</h4>
              <ul className="fst">
                <li>
                  <Link href="/"> Home</Link>
                </li>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/project">Projects</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/impact"> Impact</Link>
                </li>
                <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            <div className="col">
              <h4>Signup for Newsletters</h4>
              <form
                action="newsletter"
                method="post"
                autoComplete="off"
                className=""
              >
                <label htmlFor="email">
                  Subscribe to get the latest updates, tips, and exclusive offers!
                </label>
                <div className="txtGrp relative">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="txtBox"
                    placeholder="Enter your email address"
                  />
                  <button type="submit">
                    <img src="/images/mail.svg" alt="" />
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="copyright relative">
            <div className="contain">
              <div className="inner">
                <p>Copyright © 2024, All Rights CORA-JONES</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
