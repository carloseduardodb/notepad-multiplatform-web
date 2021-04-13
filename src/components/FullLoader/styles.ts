import styled, { css, keyframes } from 'styled-components';

const FadeInAnimation = keyframes`  
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const Content = styled.div`
  position: absolute;
  top: 25%;
`;

export const ContentAnimation = styled.div`
  background-color: #bf9b6f;
  border-radius: 50%;
  border: 20px outset #d9b777;
  Lottie {
    background-color: red;
  }
`;
