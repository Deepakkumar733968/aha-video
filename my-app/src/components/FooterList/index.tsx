import "./style.css";
interface IFooterList {
  header: string;
  list: IList[];
}

interface IList {
  link: string;
  text: string;
}

export const FooterList = ({ header, list }: IFooterList) => {
  return (
    <div>
      <p className="lis-hed-txt">{header}</p>
      <ul>
        {list.map((item, index) => (
          <li key={index}>
            <a href={item.link} className="fod-lis-link">
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
