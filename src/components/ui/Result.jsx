import Title from "../QuizTitle";
import Button_2 from "../Button_2";
import { StyledResult } from "../../styles/Styled";
import { useContext } from "react";
import GlobalState from "../../contexts/Context";

const Result = ({ length }) => {
  const { setEndQuiz, setStartQuiz } = useContext(GlobalState);
  const { score, setScore, selectedCategory } = useContext(GlobalState);
  const handleButtonClick = () => {
    setEndQuiz(false);
    setStartQuiz(false);
    setScore(0);
  };
  return (
    <>
      <StyledResult>
        <Title category_name={selectedCategory} />
        <h1>{score}</h1>
        <p>out of {length}</p>
      </StyledResult>
      <Button_2
        name={"Play Again"}
        onClick={() => {
          handleButtonClick();
        }}
      />
    </>
  );
};
export default Result;
