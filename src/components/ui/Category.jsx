import Button from "../Button";
import { StyledFlexStackColumn } from "../../styles/Styled";

const categories = ["HTML", "CSS", "Javascript", "Accessibility"];

const Category = () => {
  return (
    <StyledFlexStackColumn>
      {categories.map((name, index) => (
        <Button key={index} title={name} icon={name} />
      ))}
    </StyledFlexStackColumn>
  );
};
export default Category;
