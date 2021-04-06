import styled from 'styled-components';

export const Content = styled.div`
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
    width: 100%;
    div {
      text-align: center;
      margin: 20px;
      img {
        border: 10px solid #011126;
        width: 200px;
        height: 200px;
        border-radius: 50%;
      }
    }
    .buttons {
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
      button {
        text-align: start;
        font-size: 11pt;
        padding: 15px;
        width: 50%;
      }
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
