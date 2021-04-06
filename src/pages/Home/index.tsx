import React from 'react';
import { Content } from './styles';
import logo from '../../assets/Logo.svg';
import Navbar from '../../components/Navbar';
import ListNotes from '../../components/ListNotes';

const dataExample = {
  note: {
    id: '5',
    title: 'Why do we use it',
    text:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
};

const Home = () => {
  return (
    <Content>
      <div className="dashboard">
        <div className="nav-logo">
          <img src={logo} width="10%" alt="Notepad Multiplatform" />
          <Navbar />
        </div>
        <ListNotes note={dataExample.note} />
      </div>
    </Content>
  );
};

export default Home;
