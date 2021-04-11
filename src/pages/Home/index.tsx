import React, { useEffect, useState } from 'react';
import { Content } from './styles';
import logo from '../../assets/Logo.svg';
import Navbar from '../../components/Navbar';
import ListNotes from '../../components/ListNotes';
import monitorLocation from '../../utils/monitorLocation';
import api from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';

const dataExample = {
  note: {
    id: '5',
    title: 'Why do we use it',
    text:
      'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
  },
};

interface Note {
  id: string;
  title: string;
  created_at: string;
  text: string;
}

const Home = () => {
  monitorLocation();
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    const config = {
      Accept: 'application/json',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
    };
    api
      .get('note/show', config)
      .then((response) => {
        setNotes(response.data.notes.reverse());
      })
      .catch((error) => {
        toast.error('Erro: ' + error.message);
      });
  }, []);

  return (
    <Content>
      <div className="dashboard">
        <Navbar />
        <ListNotes notes={notes} />
      </div>
      <ToastContainer />
    </Content>
  );
};

export default Home;
