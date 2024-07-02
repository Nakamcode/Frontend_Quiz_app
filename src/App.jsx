import { GlobalStyles } from "./styles/GlobalStyles";
import { StyledContainer } from "./styles/Styled";
import Title from "./components/QuizTitle";
import SwitchButton from "./components/SwitchButton";
import ProgressBar from "./components/ProgressBar";
import SubmitButton from "./components/SubmitButton";
import Option from "./components/Button";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        <Title />
        <SwitchButton />
        <ProgressBar />
        <Option />
        <SubmitButton />
      </StyledContainer>
    </>
  );
}

export default App;
