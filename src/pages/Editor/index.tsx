import React, { useState, useEffect, useRef } from 'react';
import { Content } from './styles';
import Navbar from '../../components/Navbar';
import NoteTitle from '../../components/NoteTitle';
import NoteText from '../../components/NoteText';
import Button from '../../components/Button';
import monitorLocation from '../../utils/monitorLocation';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import api from '../../services/api';
import { toast, ToastContainer } from 'react-toastify';

interface noteParam {
  id: string;
}

interface dataForm {
  title: string;
  note: string;
}

const Editor = () => {
  monitorLocation();
  const [id, setId] = useState('');
  const formRef = useRef<FormHandles>(null);
  const config = {
    Accept: 'application/json',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user_token')}`,
    },
  };
  useEffect(() => {
    const hidratedId = window.location.pathname.split('/');
    const identify = hidratedId[2];
    setId(identify);
  }, [window.location.pathname.split('/').length == 3]);

  async function handleSendNote(data: dataForm) {
    if (data.note.length >= 1 || data.title.length >= 1) {
      await api
        .post('note/create', { title: data.title, text: data.note }, config)
        .then((response) => {
          toast.success('Deu tudo certo ao salvar!');
        })
        .catch((e) => {
          toast.error(`Erro ao salvar: ${e.message}`);
        });
    } else {
      toast.warning('Ooooops! Não é possivel não salvar nada.');
    }
  }

  return (
    <Content>
      <div className="dashboard">
        <Navbar />
        <Form
          className="centered"
          onSubmit={(data) => {
            handleSendNote(data);
          }}
          ref={formRef}
        >
          <div className="teste">
            {window.location.pathname.split('/').length == 3 ? (
              <Button color="#F6644D" type="submit" text="Atualizar" />
            ) : (
              <Button color="#F2808A" type="submit" text="Adicionar" />
            )}
          </div>
          <div className="inputs-note">
            <NoteTitle name="title" placeholder="Seu titulo aqui" type="text" />
            <NoteText name="note" placeholder="Seu texto aqui" type="text" />
          </div>
        </Form>
      </div>
      <ToastContainer />
    </Content>
  );
};

export default Editor;
