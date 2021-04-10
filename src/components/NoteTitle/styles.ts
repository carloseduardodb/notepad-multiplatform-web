import styled from 'styled-components';

export const Title = styled.input`
  height: 40px;
  border: none;
  margin: 10px;
  color: #fff;
  border-radius: 5px;
  background-color: #011126;
  padding: 10px;
  font-size: 11pt;
  box-shadow: 0 3.4px 2.7px rgba(0, 0, 0, 0.053),
    0 8.7px 6.9px rgba(0, 0, 0, 0.072), 0 17.7px 14.2px rgba(0, 0, 0, 0.088),
    0 36.5px 29.2px rgba(0, 0, 0, 0.113), 0 100px 80px rgba(0, 0, 0, 0.2);
  :focus {
    outline: none;
    box-shadow: 0 0 2pt 1pt #bf9b6f;
  }
  ::placeholder {
    color: #5c5f63;
  }
`;
