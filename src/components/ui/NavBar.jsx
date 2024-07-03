import SwitchButton from "../SwitchButton";
import Title from "../QuizTitle";
import { StyledNavBar } from "../../styles/Styled";
import { useContext } from "react";
import GlobalState from "../../contexts/Context";

const NavBar = () => {
  const { startQuiz, selectedCategory } = useContext(GlobalState);
  return (
    <header>
      <StyledNavBar>
        {startQuiz && <Title category_name={selectedCategory} />}
        <SwitchButton />
      </StyledNavBar>
    </header>
  );
};

export default NavBar;
