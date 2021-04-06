import styled from 'styled-components';

export const Content = styled.div`
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: rgb(191, 155, 111);
  background: radial-gradient(
    circle,
    rgba(191, 155, 111, 1) 0%,
    rgba(27, 27, 27, 1) 30%
  );
  h3 {
    margin-top: 30px;
    margin-bottom: 20px;
  }

  .form-body {
    background-color: #353440;
    padding: 30px;
    border-radius: 10px;
    width: 60%;
    max-width: 500px;
  }

  div.options {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    a {
      color: #6f5f54;
      font-size: 11pt;
    }
  }
`;
