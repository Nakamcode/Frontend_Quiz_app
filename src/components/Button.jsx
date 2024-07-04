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
  // Function to dynamically import images
  // All the names comes in Uppercase
  const getImageUrl = (iconName) =>
    new URL(
      `../assets/icons/${iconName.toLocaleLowerCase()}.svg`,
      import.meta.url
    ).href;

  return (
    <StyledButton selected={selected} $status={status} onClick={onClick}>
      <div className={`ans ${selected ? "selected" : ""} `}>
        {option ? (
          <div className={`option ${submitted === false && status}`}>
            {option}
          </div>
        ) : (
          <img src={getImageUrl(icon)} alt={`${icon} icon`} />
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
              src={getImageUrl(correctAnswer === index ? "correct" : status)}
            />
          </div>
        )}
    </StyledButton>
  );
};
export default Option;
