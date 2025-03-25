interface IButton {
  className: string;
  text: string;
}
export const Button = ({ className, text }: IButton) => (
  <button className={className}>{text}</button>
);
