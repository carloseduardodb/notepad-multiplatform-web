import styled from 'styled-components';

export const Content = styled.div`
  background-color: #353440;
  padding: 10px;
  border-radius: 10px;
  position: absolute;
  right: 0;
  bottom: 0;
  margin: 30px;
  a {
    color: white;
    .icon {
      position: absolute;
      right: 10px;
      cursor: pointer;
      :hover {
        color: #bf9b6f;
      }
    }
  }
  h4 {
    margin-bottom: 10px;
  }
`;
