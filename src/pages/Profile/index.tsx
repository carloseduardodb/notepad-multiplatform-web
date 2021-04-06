import React from 'react';
import { Content } from './styles';
import logo from '../../assets/Logo.svg';
import Navbar from '../../components/Navbar';
import ListNotes from '../../components/ListNotes';

const Profile = () => {
  return (
    <Content>
      <div className="dashboard">
        <Navbar />
      </div>
    </Content>
  );
};

export default Profile;
