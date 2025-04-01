interface IButton {
  className: string;
  text: string;
  onClick: () => void;
}
export const Button = ({ className, text, onClick }: IButton) => (
  <button className={className} onClick={onClick}>
    {text}
  </button>
);
