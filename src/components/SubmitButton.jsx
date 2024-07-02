import { StyledSubmitButton } from "../styles/Styled";
const Button_Secondary = ({ onClick, name = "Submit Answer" }) => {
  return <StyledSubmitButton onClick={onClick}>{name}</StyledSubmitButton>;
};

export default Button_Secondary;
