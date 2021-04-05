import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  border: none;
  padding: 10px;
  font-size: 12pt;
  margin-top: 15px;
  border-radius: 11px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: red;
    transform: scale(1.01);
  }
`;
