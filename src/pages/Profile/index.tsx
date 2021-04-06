import React from 'react';
import { Content } from './styles';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';

const Profile = () => {
  return (
    <Content>
      <div className="dashboard">
        <Navbar />
        <div>
          <img
            src="https://avatars.githubusercontent.com/u/50811913?v=4"
            alt="Sua imagem"
          />
        </div>
        <div className="buttons">
          <Button color="#BF9B6F" text="Nome" />
          <Button color="#BF9B6F" text="Senha" />
          <Button color="#011126" text="Logout" />
          <Button color="#011126" text="Apagar Conta" />
        </div>
      </div>
    </Content>
  );
};

export default Profile;
