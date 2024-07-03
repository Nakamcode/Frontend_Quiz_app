import { GlobalStyles } from "./styles/GlobalStyles";
import { StyledContainer } from "./styles/Styled";
import NavBar from "./components/ui/NavBar";
import { StyledGrid } from "./styles/Styled";
import Side_Col_Question from "./components/ui/Side_Col_Questions";
import Side_Col_Answer from "./components/ui/Side_Col_Answers";

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledContainer>
        <NavBar />
        <StyledGrid>
          <Side_Col_Question />
          <Side_Col_Answer />
        </StyledGrid>
      </StyledContainer>
    </>
  );
}

export default App;
