import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid black;
  border-right-color: transparent;
  animation: 1s ${spin} infinite linear;
`;
