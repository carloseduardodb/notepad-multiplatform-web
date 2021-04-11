import React from 'react';
import { Content } from './styles';
import Navbar from '../../components/Navbar';
import Button from '../../components/Button';
import { useHistory } from 'react-router-dom';
import monitorLocation from '../../utils/monitorLocation';
import api from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';

const Profile = () => {
  monitorLocation();
  const history = useHistory();

  function handleLogout() {
    localStorage.removeItem('user_email');
    localStorage.removeItem('user_token');
    history.push('/login');
  }

  function handleDeleteAccount() {
    const config = {
      Accept: 'application/json',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
    };
    api
      .delete('user/delete', config)
      .then((response) => {
        toast.success('Successo ao apagar conta!');
        handleLogout();
      })
      .catch((error) => {
        toast.error('Erro: ' + error.message);
      });
  }

  return (
    <Content>
      <div className="dashboard">
        <Navbar />
        <div>
          <img
            style={{ objectFit: 'contain' }}
            src={
              'https://images.unsplash.com/photo-1535585105038-bf206e97' +
              'd068?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ix' +
              'lib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
            }
            alt="Sua imagem"
          />
        </div>
        <div className="buttons">
          <Button color="#BF9B6F" text="Nome: Carlos Eduardo Dias Batista" />
          <Button color="#BF9B6F" text="Senha: **************" />
          <Button onClick={handleLogout} color="#011126" text="Logout" />
          <Button
            color="#011126"
            onClick={handleDeleteAccount}
            text="Apagar Conta"
          />
        </div>
      </div>
      <ToastContainer />
    </Content>
  );
};

export default Profile;
