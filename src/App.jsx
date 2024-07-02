import { GlobalStyles } from "./styles/GlobalStyles";
import { StyledContainer } from "./styles/Styled";
import Title from "./components/QuizTitle";
import SwitchButton from "./components/SwitchButton";
import ProgressBar from "./components/ProgressBar";
import Button_2 from "./components/Button_2";
import Option from "./components/Button";
import Category from "./components/ui/Category";
import NavBar from "./components/ui/NavBar";
import ResultMessage from "./components/ui/ResultMessage";
import Welcome from "./components/ui/WelcomeMessage";
import Result from "./components/ui/Result";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        {/* <Title />
        <SwitchButton />
        <ProgressBar />
        <Option />
        */}
        <Button_2 name="Submit Answer" />
        <NavBar />
        <Category />
        <Result />
        <ResultMessage />
        <Welcome />
      </StyledContainer>
    </>
  );
}

export default App;
