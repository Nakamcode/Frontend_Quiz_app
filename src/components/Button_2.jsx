import { StyledSubmitButton } from "../styles/Styled";
const Button_2 = ({ onClick, name }) => {
  return <StyledSubmitButton onClick={onClick}>{name}</StyledSubmitButton>;
};

export default Button_2;
