import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Note as CPNote, Notes as ContentNotes, Content } from './styles';
import { FaStickyNote, FaTrash } from 'react-icons/fa';
import api from '../../services/api';
import { toast } from 'react-toastify';

interface Note {
  id: string;
  title: string;
  created_at: string;
  text: string;
}

interface Notes {
  notes: Note | any;
}

const ListNotes: React.FC<Notes> = ({ notes }) => {
  const config = {
    Accept: 'application/json',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user_token')}`,
    },
  };

  useEffect(() => {
    notes = notes;
  }, [notes]);

  async function handleDeleteNote(id: string) {
    if (id != null) {
      await api
        .delete('note/delete/' + id, config)
        .then((response) => {
          document.getElementById(id)?.remove();
          toast.success('Apagado com successo!');
        })
        .catch((e) => {
          toast.error('Erro: ' + e.message);
        });
    } else {
      toast.warn('Ooooooops! Não é possivel salvar um documento vazio.');
    }
  }
  return (
    <Content>
      <ContentNotes>
        {notes.length === 0 && (
          <p>Crie sua primeira nota clicando em criar ali em cima!</p>
        )}
        {notes.map((note: Note) => (
          <CPNote id={note.id} key={note.id}>
            <Link to={`/editor/${note.id}`}>
              <FaStickyNote className="icon" size={40} />
              <div>
                <h4>{note.title}</h4>
                <p>{note.text}</p>
              </div>
            </Link>
            <a href="#" onClick={() => handleDeleteNote(note.id)}>
              <FaTrash className="icon" size={20} color="#F2808A" />
            </a>
          </CPNote>
        ))}
      </ContentNotes>
    </Content>
  );
};

export default ListNotes;
