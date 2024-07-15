import Button from "../Button";
import Button_2 from "../Button_2";
import { StyledFlexStackColumn } from "../../styles/Styled";
import GlobalState from "../../contexts/Context";
import { useContext, useState, useEffect } from "react";

const Options = ({ answers }) => {
  const { quizCount, setQuizCount } = useContext(GlobalState);
  const { score, setScore } = useContext(GlobalState);
  const [submit, setSubmit] = useState(true);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const currentAnswer = answers[quizCount]?.correctAnswer;
  const [status, setStatus] = useState(null);
  const [buttonName, setButtonName] = useState("Submit Answer");

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
    return typeof selectedAnswer !== "number";
  };

  useEffect(() => {
    const isLastAnswer = quizCount === answers.length - 1;
    if (isLastAnswer && !submit) {
      setButtonName("Result");
    } else if (!submit) {
      setButtonName("Next Question");
    } else {
      setButtonName("Submit Answer");
    }
  }, [submit, quizCount, answers.length]);

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
        name={buttonName}
        disable={handleDisableState(selectedAnswer)}
        onClick={() => {
          handleSubmitOnclick();
        }}
      />
    </StyledFlexStackColumn>
  );
};

export default Options;
