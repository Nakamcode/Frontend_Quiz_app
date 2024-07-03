import Button from "../Button";
import { StyledFlexStackColumn } from "../../styles/Styled";
import { useContext } from "react";
import GlobalState from "../../contexts/Context";

const categories = ["HTML", "CSS", "Javascript", "Accessibility"];

const Category = () => {
  const { setStartQuiz } = useContext(GlobalState);
  const { setSelectedCategory } = useContext(GlobalState);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setStartQuiz(true);
  };

  return (
    <StyledFlexStackColumn>
      {categories.map((name, index) => (
        <Button
          key={index}
          title={name}
          icon={name}
          onClick={() => {
            handleCategoryClick(name);
          }}
        />
      ))}
    </StyledFlexStackColumn>
  );
};
export default Category;
