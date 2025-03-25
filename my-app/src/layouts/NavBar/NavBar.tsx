import { useEffect, useState } from "react";
import "./style.css";

const NavBar = () => {
  interface IfooterList {
    link: string;
    text: string;
  }

  const footerList: IfooterList[] = [
    { link: "#", text: "Home" },
    { link: "#", text: "Movies" },
    { link: "#", text: "Shows" },
    { link: "#", text: "Offers" },
    { link: "#", text: "My aha" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`nav-main ${isScrolled ? "no-scroll" : "scroll"}`}>
      <div className="left-section-main">
        <div>
          <img
            src="https://www.aha.video/aha-logo.2a3e1475cd784cdc.svg"
            alt="aha-logo"
            className="aha-logo cursor-pointer"
          />
        </div>
        <div>
          <ul className="nav-links-main">
            {footerList.map(({ link, text }, index) => (
              <li key={index}>
                <a href={link} className="f-link">
                  {text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="right-section-main">
        <div>
          <img
            src="https://www.aha.video/search.7e86b88a45d35825.svg"
            className="ser-icon cursor-pointer"
            alt="search-icon"
          />
        </div>
        <div className="lan-aling-main cursor-pointer">
          <h6 className="lan-arrow">Tamil</h6>
          <img
            src="https://www.aha.video/chevron-down.29e402b0e14e4df7.svg"
            alt="arrow-icon"
            className="town-arrow-size"
          />
        </div>
        <button className="subscribe-now-btn">Subscribe Now</button>
        <div className="img-in-hum-sign-main">
          <div className="hum-bg-main">
            <img
              src="https://www.aha.video/user-icon.a6b5f30360c95e43.svg"
              alt="user-icon"
              className="hum-img-log"
            />
          </div>
          <p className="sign-in-text">Sign In</p>
        </div>
      </div>
    </section>
  );
};

export default NavBar;
