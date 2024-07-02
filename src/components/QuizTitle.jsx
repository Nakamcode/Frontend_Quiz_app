import { StyledTitle } from "../styles/Styled";
const Title = ({ category_name }) => {
  return (
    <StyledTitle>
      <img src="./src/assets/accessibility.svg" alt="icon" tabIndex="0" />
      <div>Accessibility</div>
    </StyledTitle>
  );
};

export default Title;
