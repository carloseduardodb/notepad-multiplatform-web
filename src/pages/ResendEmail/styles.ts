import styled from 'styled-components';

export const Content = styled.div`
  height: 100vh;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

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
    position: relative;
    .return-login {
      position: absolute;
      top: 0;
      right: 0;
      margin: 40px;
    }
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
