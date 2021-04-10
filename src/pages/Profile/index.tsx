import React from 'react';
import { Content } from './styles';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';
import monitorLocation from '../../utils/monitorLocation';

const Profile = () => {
  monitorLocation();
  const history = useHistory();
  function handleLogout() {
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_token');
    history.push('/login');
  }
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
          <Button onClick={handleLogout} color="#011126" text="Logout" />
          <Button color="#011126" text="Apagar Conta" />
        </div>
      </div>
    </Content>
  );
};

export default Profile;
