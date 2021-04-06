import React from 'react';
import { NavItem, NavLogo } from './styles';
import { FaHome, FaPlus, FaUser } from 'react-icons/fa';
import logo from '../../assets/Logo.svg';

const Navbar = () => {
  return (
    <NavLogo className="nav-logo">
      <img src={logo} width="10%" alt="Notepad Multiplatform" />
      <NavItem>
        <a href="/home">
          <li className="select">
            <FaHome style={{ marginRight: 5 }} size={25} />
            INICIO
          </li>
        </a>
        <a href="/editor">
          <li>
            <FaPlus style={{ marginRight: 5 }} size={25} />
            CRIAR
          </li>
        </a>
        <a href="/profile">
          <li>
            <FaUser style={{ marginRight: 5 }} size={25} />
            PERFIL
          </li>
        </a>
      </NavItem>
    </NavLogo>
  );
};

export default Navbar;
