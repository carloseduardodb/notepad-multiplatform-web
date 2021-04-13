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
import { useHistory } from 'react-router';
import { number } from 'yup';
import useFullLoader from '../../hooks/useFullLoader';

interface noteParam {
  id: string;
}

interface dataForm {
  title: string;
  note: string;
}

const Editor = () => {
  monitorLocation();
  const [loader, showLoader, hideLoader] = useFullLoader();
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
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
    if (Number(identify) > 0) {
      showLoader();
      api
        .get('note/show/' + identify, config)
        .then((response) => {
          hideLoader();
          setTitle(String(response.data.note.title));
          setText(String(response.data.note.text));
        })
        .catch((error) => {
          hideLoader();
          toast.error(error.message);
        });
    }
  }, [window.location.pathname.split('/').length == 3]);

  function handleSubmit(data: dataForm) {
    if (window.location.pathname.split('/').length !== 3) {
      handleSendNote(data);
    } else {
      handleUpdateNote(data);
    }
  }

  async function handleUpdateNote(data: dataForm) {
    if (data.note.length >= 1 || data.title.length >= 1) {
      await api
        .put(
          'note/update/' + id,
          { title: data.title, text: data.note },
          config,
        )
        .then((response) => {
          toast.success('Sucesso ao atualizar nota!');
        })
        .catch((e) => {
          toast.error('Erro: ' + e.message);
        });
    } else {
      toast.warn('Ooooooops! Não é possivel salvar um documento vazio.');
    }
  }

  async function handleSendNote(data: dataForm) {
    if (data.note.length >= 1 || data.title.length >= 1) {
      await api
        .post('note/create', { title: data.title, text: data.note }, config)
        .then((response) => {
          formRef.current?.reset();
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
      {loader}
      <div className="dashboard">
        <Navbar />
        <Form
          initialData={{ title: title, note: text }}
          className="centered"
          onSubmit={(data) => {
            handleSubmit(data);
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
