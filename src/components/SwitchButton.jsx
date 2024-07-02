import { StyledSwitchButton, StyledFlex_center } from "../styles/Styled";
import { IoSunnyOutline } from "react-icons/io5";
import { PiMoon } from "react-icons/pi";
// import { useContext } from "react";
// import GlobalState from "../context";

const SwitchButton = () => {
  //   const { mode, setMode } = useContext(GlobalState);

  //   const handleModeChange = () => {
  //     setMode(mode === "light" ? "dark" : "light");
  //   };

  return (
    <StyledFlex_center>
      <label htmlFor="switch">
        <IoSunnyOutline />
      </label>
      <StyledSwitchButton
        type="checkbox"
        // checked={mode === "dark"}
        id="switch"
        defaultChecked={false}
        // onChange={() => {
        //   handleModeChange();
        // }}
      />
      <label htmlFor="switch">
        <PiMoon />
      </label>
    </StyledFlex_center>
  );
};

export default SwitchButton;
