import { StyledWelcomeMessage } from "../../styles/Styled";

const Welcome = () => {
  return (
    <StyledWelcomeMessage>
      <h1>
        Welcome to the <strong>Frontend Quiz!</strong>
      </h1>
      <p>Pick a subject to get started.</p>
    </StyledWelcomeMessage>
  );
};

export default Welcome;
