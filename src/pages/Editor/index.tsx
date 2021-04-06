import React from 'react';
import { Content } from './styles';
import logo from '../../assets/Logo.svg';
import Navbar from '../../components/Navbar';
import ListNotes from '../../components/ListNotes';

const Editor = () => {
  return (
    <Content>
      <div className="dashboard">
        <div className="nav-logo">
          <img src={logo} width="10%" alt="Notepad Multiplatform" />
          <Navbar />
        </div>
      </div>
    </Content>
  );
};

export default Editor;
