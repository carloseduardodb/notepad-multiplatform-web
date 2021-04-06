import styled from 'styled-components';

export const Text = styled.textarea`
  height: 65vh;
  width: 60%;
  border-radius: 10px;
  border: none;
  color: #fff;
  background-color: #011126;
  padding: 20px;
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
