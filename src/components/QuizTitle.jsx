import { StyledTitle } from "../styles/Styled";
const Title = ({ category_name }) => {
  return (
    <StyledTitle>
      <img src={`./src/assets/icons/${category_name}.svg`} alt="icon" tabIndex="0" />
      <div>{category_name}</div>
    </StyledTitle>
  );
};

export default Title;
