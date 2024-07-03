import { GlobalStyles } from "./styles/GlobalStyles";
import NavBar from "./components/ui/NavBar";
import Side_Col_Question from "./components/ui/Side_Col_Questions";
import Side_Col_Answer from "./components/ui/Side_Col_Answers";
import { theme, StyledContainer, StyledGrid } from "./styles/Styled";
import { ThemeProvider } from "styled-components";

import { useContext, useEffect } from "react";
import GlobalState from "./contexts/Context";

function App() {
  const { mode, setMode } = useContext(GlobalState);
  const currentTheme = theme[mode] || theme.light;

  useEffect(() => {
    const userThemePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    setMode(userThemePreference ? "dark" : "light");
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <StyledContainer>
        <NavBar />
        <StyledGrid>
          <Side_Col_Question />
          <Side_Col_Answer />
        </StyledGrid>
      </StyledContainer>
    </ThemeProvider>
  );
}

export default App;
