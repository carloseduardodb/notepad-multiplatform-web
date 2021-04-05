import styled, { css, keyframes } from 'styled-components';

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation-name: ${FadeInAnimation};
  h1 {
    margin-top: 20px;
  }
`;

export const ContentAnimation = styled.div`
  background-color: #bf9b6f;
  width: max-content;
  height: max-content;
  border-radius: 50%;
  border: 20px outset #d9b777;
  Lottie {
    background-color: red;
  }
`;
