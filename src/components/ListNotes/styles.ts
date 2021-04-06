import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 50px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 50px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Notes = styled.ul`
  padding: 10px;
  width: 55%;
`;

export const Note = styled.li`
  list-style: none;
  border-bottom: 1px solid #4d545c;
  padding: 10px;
  a {
    text-decoration: none;
  }
  p {
    margin-top: 15px;
    color: white;
  }
`;
