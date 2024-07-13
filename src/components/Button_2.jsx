import { StyledSubmitButton } from "../styles/Styled";
const Button_2 = ({ disable, onClick, name }) => {
  return (
    <StyledSubmitButton disabled={disable} onClick={onClick}>
      {name}
    </StyledSubmitButton>
  );
};

export default Button_2;
