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

  .dashboard {
    background-color: #353440;
    padding: 30px;
    border-radius: 10px;
    width: 90%;
    position: relative;

    img {
      position: absolute;
      top: 0;
      left: 0;
      margin: 30px;
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
