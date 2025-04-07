import "./style.css";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { fetchCatalogData } from "../../services/api";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [activeLink, setActiveLink] = useState<string>("");
  const [catalog, setCatalog] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchCatalogData();
        setCatalog(Array.isArray(data) ? data : []);
      } catch (err) {
        const errorMessage =
          err instanceof Error ? err.message : "Something went wrong";
        setError(errorMessage);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  interface IfooterList {
    link: string;
    text: string;
  }

  const footerList: IfooterList[] = [
    { link: "/", text: "Home" },
    { link: "/movies", text: "Movies" },
    { link: "/shows", text: "Shows" },
    { link: "/offers", text: "Offers" },
    { link: "/myaha", text: "My aha" },
  ];

  return (
    <>
      <nav className={`nav-main ${isScrolled ? "no-scroll" : "scroll"}`}>
        <div className="left-section-main">
          <Link to={"/"}>
            <img
              src="https://www.aha.video/aha-logo.2a3e1475cd784cdc.svg"
              alt="aha-logo"
              className="aha-logo cursor-pointer"
            />
          </Link>
          <ul className="nav-links-main">
            {footerList.map(({ link, text }, index) => (
              <li key={index}>
                <Link
                  to={link}
                  className="f-link"
                  style={{ opacity: activeLink === link ? 1 : 0.7 }}
                >
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="right-section-main">
          <img
            src="https://www.aha.video/search.7e86b88a45d35825.svg"
            className="ser-icon cursor-pointer"
            alt="search-icon"
          />
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

        <GiHamburgerMenu
          className="nav-hamburger-menu"
          size={28}
          color="white"
          onClick={() => setIsSidebarOpen(true)}
        />
      </nav>

      <div className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
        <div className="sidebar-header">
          <IoMdClose
            size={28}
            color="white"
            onClick={() => setIsSidebarOpen(false)}
            className="close-icon"
          />
        </div>
        <ul className="sidebar-links">
          {footerList.map(({ link, text }, index) => (
            <li key={index}>
              <Link
                to={link}
                className="f-link"
                onClick={() => setIsSidebarOpen(false)}
              >
                {text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="sidebar-footer">
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
      </div>
    </>
  );
};

export default NavBar;
