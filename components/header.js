import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(false);
  const router = useRouter();

  const ToggleAction = () => {
    setToggle(!toggle);
  };

  const handleDropdown = (state) => {
    setActiveDropdown(state);
  };

  const closeMenu = () => {
    setToggle(false);
    setActiveDropdown(false);
  };

  // Ensure dropdown closes on route change
  useEffect(() => {
    const handleRouteChange = () => {
      closeMenu();
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <header>
      <div className="contain">
        <div className="logo">
          <Link href="/">
            <img src="/images/logo.svg" alt="Logo" />
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
              <Link href="/about" onClick={closeMenu}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/project" onClick={closeMenu}>
                Projects
              </Link>
            </li>

            <li
              className="drop"
              onMouseEnter={() => handleDropdown(true)}
              onMouseLeave={() => handleDropdown(false)}
            >
              <Link href="/services" onClick={closeMenu}>
                Services
              </Link>
              <ul className={`sub ${activeDropdown ? "active" : ""}`}>
                <li>
                  <Link href="/services/detail" onClick={closeMenu}>
                    AI Infrastructure Strategy
                  </Link>
                </li>
                <li>
                  <Link href="/services/detail" onClick={closeMenu}>
                    Cloud-Native ML Enablement
                  </Link>
                </li>
                <li>
                  <Link href="/impact" onClick={closeMenu}>
                    Impact
                  </Link>
                </li>
                <li>
                  <Link href="/case-study" onClick={closeMenu}>
                    Case Studies
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/impact" onClick={closeMenu}>
                Impact
              </Link>
            </li>
            <li>
              <Link href="/case-study" onClick={closeMenu}>
                Case Studies
              </Link>
            </li>
          </ul>
        </nav>

        <div className="login_btns">
          <ul>
            <li>
              <Link href="/contact" className="site_btn" onClick={closeMenu}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="clearfix"></div>
      </div>
    </header>
  );
}
