import { StyledButton } from "../styles/Styled";

const Option = ({
  option,
  title,
  icon,
  onClick,
  status,
  selected,
  selectedAnswer,
  correctAnswer,
  index,
  submitted,
}) => {
  return (
    <StyledButton selected={selected} $status={status} onClick={onClick}>
      <div className={`ans ${selected ? "selected" : ""} `}>
        {option ? (
          <div
            className={`option ${submitted === false && status}
          `}
          >
            {option}
          </div>
        ) : (
          <img src={`./src/assets/icons/${icon}.svg`} alt={`${icon} icon`} />
        )}
        {title}
      </div>
      {option &&
        status &&
        (selectedAnswer === index || correctAnswer === index) && (
          <div
            className={`${correctAnswer === index ? "correct" : status} check`}
          >
            <img
              src={`./src/assets/icons/${
                correctAnswer === index ? "correct" : status
              }.svg`}
            />
          </div>
        )}
    </StyledButton>
  );
};
export default Option;
