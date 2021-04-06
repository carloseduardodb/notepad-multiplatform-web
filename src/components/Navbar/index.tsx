import React from 'react';
import { NavItem, NavLogo } from './styles';
import { FaHome, FaPlus, FaUser } from 'react-icons/fa';
import logo from '../../assets/Logo.svg';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const path = useLocation();
  const name_router = path.pathname;

  return (
    <NavLogo className="nav-logo">
      <img src={logo} width="10%" alt="Notepad Multiplatform" />
      <NavItem>
        <Link to="/home">
          <li className={name_router == '/home' ? 'select' : ''}>
            <FaHome style={{ marginRight: 5 }} size={25} />
            INICIO
          </li>
        </Link>
        <Link to="/editor">
          <li className={name_router == '/editor' ? 'select' : ''}>
            <FaPlus style={{ marginRight: 5 }} size={25} />
            CRIAR
          </li>
        </Link>
        <Link to="/profile">
          <li className={name_router == '/profile' ? 'select' : ''}>
            <FaUser style={{ marginRight: 5 }} size={25} />
            PERFIL
          </li>
        </Link>
      </NavItem>
    </NavLogo>
  );
};

export default Navbar;
