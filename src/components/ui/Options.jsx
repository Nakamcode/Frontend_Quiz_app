import Button from "../Button";
import Button_2 from "../Button_2";
import { StyledFlexStackColumn } from "../../styles/Styled";
import GlobalState from "../../contexts/Context";
import { useContext, useState } from "react";

const Options = ({ answers }) => {
  const { quizCount, setQuizCount } = useContext(GlobalState);
  const { score, setScore } = useContext(GlobalState);
  const [submit, setSubmit] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const currentAnswer = answers[quizCount]?.correctAnswer;
  const [status, setStatus] = useState(null);

  const handleSubmitOnclick = () => {
    const status = currentAnswer === selectedAnswer ? "correct" : "wrong";

    setStatus(status);

    if (!submit) {
      setQuizCount(quizCount + 1);
      setSelectedAnswer(null);
      setStatus(null);
      selectedAnswer === currentAnswer && setScore(score + 1);
    }

    setSubmit(!submit);
  };

  const handleOptionOnclick = (index) => {
    setSelectedAnswer(index);
    setSubmit(true);
  };

  const handleDisableState = (selectedAnswer) => {
    if (typeof selectedAnswer === "number") {
      return false;
    } else {
      return true;
    }
  };

  const keys = ["A", "B", "C", "D"];

  return (
    <StyledFlexStackColumn>
      {answers[quizCount]?.options.map((value, index) => (
        <Button
          key={index}
          option={keys[index]}
          title={value}
          onClick={() => {
            handleOptionOnclick(index);
          }}
          selected={selectedAnswer === index}
          status={status}
          index={index}
          selectedAnswer={selectedAnswer}
          correctAnswer={currentAnswer}
          submitted={submit}
        />
      ))}
      <Button_2
        name={submit ? "Submit Answer" : "Next Question"}
        disable={handleDisableState(selectedAnswer)}
        onClick={() => {
          handleSubmitOnclick();
        }}
      />
    </StyledFlexStackColumn>
  );
};

export default Options;
