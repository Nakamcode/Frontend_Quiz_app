import ProgressBar from "../ProgressBar";
import { StyledQuestion } from "../../styles/Styled";
import { useEffect, useState } from "react";
import GlobalState from "../../contexts/Context";
import { useContext } from "react";

const Question = ({ questions }) => {
  const { quizCount, setQuizCount } = useContext(GlobalState);
  const { setEndQuiz } = useContext(GlobalState);

  let totalQuestions = questions.length;
  let progressValue = 100 / totalQuestions;

  useEffect(() => {
    if (quizCount === questions.length) {
      setEndQuiz(true);
      setQuizCount(0);
    }
  }, [quizCount]);

  return (
    <StyledQuestion>
      <p>
        <i>Question {quizCount + 1} of 5</i>
      </p>
      <h1>{questions[quizCount]?.question}</h1>
      <ProgressBar value={progressValue * (quizCount + 1)} />
    </StyledQuestion>
  );
};
export default Question;
