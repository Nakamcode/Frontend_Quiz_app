import { StyledSwitchButton, StyledFlex_center } from "../styles/Styled";
import { useContext } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import { PiMoon } from "react-icons/pi";
import GlobalState from "../contexts/Context";

const SwitchButton = () => {
  const { mode, setMode, visited, setVisited } = useContext(GlobalState);

  const handleModeChange = () => {
    setMode(mode === "light" ? "dark" : "light");
    setVisited(true);
    localStorage.setItem("visited", JSON.stringify(visited));
  };

  return (
    <StyledFlex_center>
      <label htmlFor="switch">
        <IoSunnyOutline />
      </label>
      <StyledSwitchButton
        aria-label="Switch"
        type="checkbox"
        checked={mode === "dark" ? true : false}
        id="switch"
        onChange={() => {
          handleModeChange();
        }}
      />
      <label htmlFor="switch">
        <PiMoon />
      </label>
    </StyledFlex_center>
  );
};

export default SwitchButton;
