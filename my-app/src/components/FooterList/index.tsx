import { IFooterList } from "../../utils/Footer/footer";
import "./style.css";
export const FooterList = ({ header, list }: IFooterList) => {
  return (
    <div>
      <p className="lis-hed-txt">{header}</p>
      <ul>
        {list.map((item, index) => (
          // <li key={index}>
          <a href={item.link} className="fod-lis-link" key={index}>
            {item.text}
          </a>
          // </li>
        ))}
      </ul>
    </div>
  );
};
