import ButtonProps from "../../interfaces/ButtonProps";

const Button: React.FC<ButtonProps> = ({ buttonText, addClass, buttonType, onClick }) => {
  return (
    <button 
      className={`button ${addClass}`} 
      type={buttonType} 
      aria-label={buttonText}
      onClick={onClick}
    >{buttonText}</button>
  );
}

export default Button;