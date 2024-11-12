interface ButtonProps {
  onClick?: () => void;
  text: string;
}

const Button = ({ text }: ButtonProps) => {
  return <button className="button">{text}</button>;
};

export default Button;
