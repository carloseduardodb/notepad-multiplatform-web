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

    .nav-logo {
      margin-bottom: 30px;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
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
