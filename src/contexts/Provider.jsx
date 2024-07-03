import { useState } from "react";
import GlobalState from "./Context";

const Provider = ({ children }) => {
  const [score, setScore] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [startQuiz, setStartQuiz] = useState(false);
  const [endQuiz, setEndQuiz] = useState(false);
  const [quizCount, setQuizCount] = useState(0);
  const [mode, setMode] = useState("light");

  return (
    <GlobalState.Provider
      value={{
        score,
        setScore,
        selectedCategory,
        setSelectedCategory,
        startQuiz,
        setStartQuiz,
        endQuiz,
        setEndQuiz,
        quizCount,
        setQuizCount,
        mode,
        setMode,
      }}
    >
      {children}
    </GlobalState.Provider>
  );
};
export default Provider;
