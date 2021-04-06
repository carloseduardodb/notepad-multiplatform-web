import styled from 'styled-components';

export const NavItem = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  a {
    text-decoration: none;
  }
  li {
    display: flex;
    align-items: center;
    color: #f1f1f1;
    font-size: 12pt;
    list-style: none;
    margin: 10px;
    padding: 5px;
    font-weight: bold;

    &.select {
      color: #f2808a;
    }

    :hover {
      color: #f2808a;
    }
  }
`;

export const NavLogo = styled.nav`
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
