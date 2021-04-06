import React from 'react';
import { Content } from './styles';
import InputText from '../../components/InputText';
import logo from '../../assets/Logo.svg';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

const Home = () => {
  return (
    <Content>
      <div className="dashboard">
        <img src={logo} width="10%" alt="Notepad Multiplatform" />
      </div>
    </Content>
  );
};

export default Home;
