import styled from "styled-components";

const StyledContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: auto;
  padding: 20px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;

  @media (max-width: 800px) {
    display: flex;
    flex-direction: column;
  }
`;

const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  font-size: 18px;
  font-weight: 500;
  /* theme */
  color: black;
`;

const StyledNavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  > div {
    flex: 1;
  }
  > div:last-child {
    justify-content: flex-end;
  }
`;

const StyledFlexStackColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const StyledFlex_center = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  svg {
    display: flex;
    width: 20px;
    height: 20px;
    transform: rotate(270deg);
  }
`;

const StyledButton = styled.button`
  background: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  font-size: 20px;
  font-weight: 600;
  padding: 15px;
  color: black;
  border: none;
  border-radius: 15px;
  transition: all 150ms;

  .option {
    background-color: #f4f6fa;
    padding: 8.5px 13px;
    border-radius: 5px;
    color: var(--c4);
  }

  &:hover {
    outline: 2px solid var(--c1);
    .option {
      background-color: #e7c0ff;
      color: var(--c1);
    }
  }

  .selected {
    .option {
      background-color: var(--c1);
      color: white;
    }

    .correct {
      background-color: var(--c8);
    }
    .wrong {
      background-color: var(--c9);
    }
  }

  &:active {
    .option {
      /* background-color: var(--c1); */
      color: white;
    }
  }
  .ans {
    display: flex;
    align-items: center;
    gap: 20px;
    text-align: left;
  }
  .check img {
    display: flex;
    width: 25px;
  }
`;

const StyledSubmitButton = styled.button`
  width: 100%;
  background-color: var(--c1);
  color: white;
  padding: 20px;
  display: block;
  align-items: center;
  gap: 20px;
  font-size: 20px;
  font-weight: 600;
  border: none;
  border-radius: 15px;
  box-shadow: 0 16px 40px rgba(143, 160, 193, 0.14);
  transition: all 150ms;

  &:hover,
  &:active {
    opacity: 0.7;
    transition: all 150ms;
  }
`;

const StyledProgressBar = styled.progress`
  margin-top: 120px;
  width: 100%;
  height: 16px;
  border-radius: 20px;
  transition: all 150ms;

  &::-webkit-progress-bar {
    border-radius: 20px;
    /* theme */
    background-color: white;
    padding: 4px;
  }

  &::-webkit-progress-value {
    border-radius: 20px;
    background-color: var(--c1);
    transition: all 150ms;
  }

  &::-moz-progress-bar {
    border-radius: 20px;
    background-color: #a729f5;
    padding: 4px;
  }

  &::-moz-progress-value {
    border-radius: 20px;
    background-color: var(--c1);
    transition: all 150ms;
  }
`;

const StyledSwitchButton = styled.input`
  position: relative;
  appearance: none;
  width: 50px;
  height: 25px;
  background-color: var(--c1);
  border-radius: 20px;
  transition: all 200ms;

  &::before {
    position: absolute;
    content: "";
    width: 35%;
    aspect-ratio: 1/1;
    background-color: white;
    border-radius: 100%;

    top: 50%;
    left: 6%;
    transform: translate(0%, -50%);
    transition: all 200ms;
  }

  &:checked::before {
    left: 58%;
    transition: all 200ms;
  }
`;

const StyledQuestion = styled.div`
  /* theme */
  color: black;
  p {
    margin-bottom: 20px;
    /* theme */
    color: black;
  }
`;

const StyledWelcomeMessage = styled.div`
  /* theme */
  color: black;
  h1 {
    font-size: 45px;
    font-weight: 400;
  }
  p {
    margin-top: 40px;
    /* theme */
    color: black;
  }
`;

const StyledResult = styled.div`
  /* theme */
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px;
  border-radius: 10px;
  margin-bottom: 20px;

  h1 {
    font-size: 90px;
    /* theme */
    color: black;
  }
`;

export {
  StyledContainer,
  StyledGrid,
  StyledFlex_center,
  StyledFlexStackColumn,
  StyledNavBar,
  StyledProgressBar,
  StyledButton,
  StyledSwitchButton,
  StyledSubmitButton,
  StyledTitle,
  StyledQuestion,
  StyledWelcomeMessage,
  StyledResult,
};
