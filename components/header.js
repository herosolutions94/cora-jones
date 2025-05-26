import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const ToggleAction = () => {
    setToggle(!toggle);
  };
  const [userDrop, setUserDrop] = useState(false);
  const ToggleUserDrop = () => {
    setUserDrop(!userDrop);
  };
  return (
    <header>
      <div className="contain">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo.svg" alt="" />
          </Link>
        </div>
        <div
          className={toggle ? "toggle active" : "toggle"}
          onClick={ToggleAction}
        >
          <span></span>
        </div>
        <nav id="nav" className={toggle ? "active" : ""}>
          <ul>
            <li>
              <Link href="" onClick={ToggleAction}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="" onClick={ToggleAction}>
                Projects
              </Link>
            </li>
            <li className="drop">
              <Link href="" onClick={ToggleAction}>
                Services
              </Link>
              <ul className="sub">
                <li>
                  <Link href="" onClick={ToggleAction}>
                    Appointment tips
                  </Link>
                </li>
                <li>
                  <Link href="" onClick={ToggleAction}>
                    Our Quote
                  </Link>
                </li>
                <li>
                  <Link href="" onClick={ToggleAction}>
                    Impact
                  </Link>
                </li>
                <li>
                  <Link href="" onClick={ToggleAction}>
                    Case Studies
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href="/impact" onClick={ToggleAction}>
                Impact
              </Link>
            </li>
            <li>
              <Link href="" onClick={ToggleAction}>
                Case Studies
              </Link>
            </li>
          </ul>
          <div className="cta">
            <Link href="/contact" onClick={ToggleAction} className="site_btn">
              Contact Us
            </Link>
          </div>
        </nav>
        <div className="clearfix"></div>
      </div>
    </header>
  );
}
