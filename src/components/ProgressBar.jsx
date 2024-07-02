import { StyledProgressBar } from "../styles/Styled";

const ProgressBar = ({ value = 50 }) => {
  return <StyledProgressBar value={value} max={"100"}></StyledProgressBar>;
};
export default ProgressBar;
