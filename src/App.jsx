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

  const { visited, setVisited } = useContext(GlobalState);

  useEffect(() => {
    const userThemePreference = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (!visited) {
      setMode(userThemePreference ? "dark" : "light");
      setVisited(true);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
  }, [mode]);

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

/*

function Counter() {
	const [count, setCount] = useState(() => {
		const storedCount = localStorage.getItem('count');
		return storedCount ? parseInt(storedCount) : 0;
	});

	useEffect(() => {
		localStorage.setItem('count', count.toString());
	}, [count]);

	const increment = () => {
		setCount(prevCount => prevCount + 1);
	};

	const decrement = () => {
		setCount(prevCount => prevCount - 1);
	};

	return (
		<div>
			<h1>Counter: {count}</h1>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
		</div>
	);
}

export default Counter;

*/
