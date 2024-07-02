import { StyledButton } from "../styles/Styled";

const Button = ({ option, title = "HTML", icon = "html" }) => {
  return (
    <StyledButton>
      <div className="ans">
        {option ? (
          <div className="option">{option}</div>
        ) : (
          <img src={`./src/assets/${icon}.svg`} alt={`${icon} icon`} />
        )}
        {title}
      </div>
    </StyledButton>
  );
};
export default Button;
