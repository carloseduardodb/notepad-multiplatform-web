import React from 'react';
import { NavItem } from './styles';
import { FaHome, FaPlus, FaUser } from 'react-icons/fa';

const Navbar = () => {
  return (
    <NavItem>
      <a href="#">
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
      <a href="#">
        <li>
          <FaUser style={{ marginRight: 5 }} size={25} />
          PERFIL
        </li>
      </a>
    </NavItem>
  );
};

export default Navbar;
