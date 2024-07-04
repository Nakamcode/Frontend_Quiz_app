import { StyledTitle } from "../styles/Styled";
const Title = ({ category_name }) => {
  // Function to dynamically import images
  // All the names comes in Uppercase
  const getImageUrl = (iconName) =>
    new URL(
      `../assets/icons/${iconName.toLocaleLowerCase()}.svg`,
      import.meta.url
    ).href;

  return (
    <StyledTitle>
      <img src={getImageUrl(category_name)} alt="icon" tabIndex="0" />
      <div>{category_name}</div>
    </StyledTitle>
  );
};

export default Title;
