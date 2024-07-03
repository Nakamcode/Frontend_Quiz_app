import { keyframes } from "styled-components";

// Animation keyfrmes

const fadeIn = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }

`;

const shakeX = keyframes`
  0%, 100% {
    transform: translateX(0);
  }
  10%, 30%, 50%, 70%, 90% {
    transform: translateX(-10px);
  }
  20%, 40%, 60%, 80% {
    transform: translateX(10px);
  }
`;

const bounceIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.3);
  }
  50% {
    opacity: 1;
    transform: scale(1.05);
  }
  70% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1);
  }
`;

export { fadeIn, shakeX, bounceIn };
