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

    .centered {
      width: 100%;
      text-align: center;

      div.teste {
        margin: 0 auto;
        width: 80%;
        display: flex;
        justify-content: flex-end;
        button {
          width: max-content;
        }
      }
    }
  }

  .inputs-note {
    display: flex;
    align-items: center;
    flex-direction: column;
    input {
      width: 80%;
    }
    textArea {
      width: 80%;
    }
  }
`;
