import SwitchButton from "../SwitchButton";
import Title from "../QuizTitle";
import { StyledNavBar } from "../../styles/Styled";

const NavBar = () => {
  return (
    <header>
      <StyledNavBar>
        <Title category_name={"HTML"} />
        <SwitchButton />
      </StyledNavBar>
    </header>
  );
};

export default NavBar;
