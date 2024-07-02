import Title from "../QuizTitle";
import Button_2 from "../Button_2";
import { StyledResult } from "../../styles/Styled";

const Result = ({ length }) => {
  return (
    <>
      <StyledResult>
        <Title category_name="HTML" />
        <h1>3</h1>
        <p>out of 5</p>
      </StyledResult>
      <Button_2 name={"Play Again"} />
    </>
  );
};
export default Result;
