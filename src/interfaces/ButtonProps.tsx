export default interface ButtonProps {
  buttonText?: string;
  addClass?: string;
  buttonType: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}