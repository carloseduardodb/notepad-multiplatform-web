import styled from 'styled-components';

export const Content = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .dashboard {
    background-color: #353440;
    padding: 30px;
    width: 100%;
  }

  .inputs-note {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .action-buttons {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 130px;
    button {
      width: 25%;
      margin-bottom: 10px;
    }
  }
`;
