import { FooterList } from "../../components/FooterList";
import { FOOTER_LIST } from "../../utils/Footer/footer";
import "./style.css";

//     header: "Must Watch Movies",
//     list: [
//       { link: "#", text: "Sevappi" },
//       { link: "#", text: "Maruthi Nagar Police Station" },
//       { link: "#", text: "Rathasaatchi" },
//       { link: "#", text: "Writer" },
//       { link: "#", text: "Sila Nerangalil Sila Manidhargal" },
//       { link: "#", text: "Udanpaal" },
//     ],
//   },
//   {
//     header: "Aha Originals",
//     list: [
//       { link: "#", text: "Vera Maari Office" },
//       { link: "#", text: "Akash Vaani" },
//       { link: "#", text: "Pettaikaali" },
//       { link: "#", text: "Vera Maari Love Story" },
//       { link: "#", text: "High On Kadhal" },
//       { link: "#", text: "Ammuchi 2" },
//     ],
//   },
//   {
//     header: "Genres",
//     list: [
//       { link: "#", text: "Tamil Drama Movies" },
//       { link: "#", text: "Tamil Action Movies" },
//       { link: "#", text: "Tamil Comedy Movies" },
//       { link: "#", text: "Tamil Romance Movies" },
//       { link: "#", text: "Tamil Crime Movies" },
//       { link: "#", text: "Tamil Thriller Movies" },
//       { link: "#", text: "Tamil Horror Movies" },
//     ],
//   },
//   {
//     header: "Learn More",
//     list: [
//       { link: "#", text: "View Plans" },
//       { link: "#", text: "About Us" },
//       { link: "#", text: "FAQs / Help" },
//       { link: "#", text: "Privacy Policy" },
//       { link: "#", text: "Terms of Service" },
//       { link: "#", text: "Grievance Redressal" },
//       { link: "#", text: "Blog" },
//     ],
//   },
// ];
const Footer = () => {
  return (
    <footer className="footer-main">
      <div className="fot-sec-one-main">
        <div className="fot-sec-one">
          <div>
            <img
              src="https://www.aha.video/aha-gray-logo.29a310bfcc08d0e8.svg"
              alt="aha-logo"
            />
          </div>
          <p className="fod-log-top-tex">Connect with us</p>
          <div className="fod-ali-main">
            <a href="#">
              <img
                src="https://www.aha.video/assets/images/social/instagram-footer.png"
                alt="sol-icon"
                className="sol-icn-size"
              />
            </a>
            <a href="#">
              <img
                src="https://www.aha.video/assets/images/social/facebook-footer.svg"
                alt="sol-icon"
                className="sol-icn-size"
              />
            </a>
            <a href="#">
              <img
                src="https://www.aha.video/assets/images/social/twitter-footer.svg"
                alt="sol-icon"
                className="sol-icn-size"
              />
            </a>
          </div>
          <p className="fod-log-top-tex">Download aha mobile app</p>
          <div className="ply-ali-main">
            <a href="#">
              <img
                src="https://www.aha.video/assets/images/social/google_play_mobile.svg"
                alt="ply-ic-store"
                className="ply-ic-store-size"
              />
            </a>
            <a href="#">
              <img
                src="https://www.aha.video/assets/images/social/app_store_mobile.svg"
                alt="ply-ic-store"
                className="ply-ic-store-size"
              />
            </a>
          </div>
          <span className="white-des-text-fot">
            <span>Contact us:</span>
            <a href="#" className="orn-txt-lnk">
              support@aha.video
            </a>
          </span>
        </div>
        <div className="sec-ali-main">
          {FOOTER_LIST.map((item, index) => (
            <div className="fot-sec-two" key={index}>
              <FooterList header={item.header} list={item.list} />
            </div>
          ))}
        </div>
      </div>
      <div className="fod-hr-line-main">
        <p className="copyright-txt">
          © Copyright 2025 Arha Media and Broadcasting Pvt Ltd. All rights
          reserved.
        </p>
        <div className="powered-by-main">
          <a href="https://quickplay.com/" className="powered-by-link">
            Powered by
          </a>
          <a href="https://quickplay.com/">
            <img
              src="	https://www.aha.video/assets/images/logo/quickplay-logo_scale_w_1400.png"
              alt="play-image"
              className="play-img"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
