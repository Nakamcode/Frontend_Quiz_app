import Category from "./Category";
import Options from "./Options";
import Result from "./Result";
import { useContext } from "react";
import GlobalState from "../../contexts/Context";
import data from "../../data";

const Side_Col_Answer = () => {
  const { startQuiz, endQuiz, selectedCategory } = useContext(GlobalState);

  const filteredAnswers = data.filter((q) => {
    if (q.category === selectedCategory) {
      return q.options;
    }
  });

  const lengthOfQuestions = filteredAnswers.length;
  return (
    <div className="col_one">
      {!endQuiz ? (
        startQuiz ? (
          <Options answers={filteredAnswers} />
        ) : (
          <Category />
        )
      ) : (
        <Result length={lengthOfQuestions} />
      )}
    </div>
  );
};

export default Side_Col_Answer;
