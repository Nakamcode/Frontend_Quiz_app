import Welcome from "./WelcomeMessage";
import Questions from "./Questions";
import ResultMessage from "./ResultMessage";
import { useContext } from "react";
import GlobalState from "../../contexts/Context";
import data from "../../data";

const Side_Col_Question = () => {
  const { startQuiz, selectedCategory } = useContext(GlobalState);
  const { endQuiz } = useContext(GlobalState);

  const filteredCategory = data.filter((q) => {
    return q.category === selectedCategory;
  });
  return (
    <div>
      {!endQuiz ? (
        startQuiz ? (
          <Questions questions={filteredCategory} />
        ) : (
          <Welcome />
        )
      ) : (
        <ResultMessage />
      )}
    </div>
  );
};

export default Side_Col_Question;
