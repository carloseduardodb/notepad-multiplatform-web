import React from 'react';
import { Link } from 'react-router-dom';
import { Note as CPNote, Notes as ContentNotes, Content } from './styles';
import { FaStickyNote } from 'react-icons/fa';
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

const ListNotes: React.FC<Notes> = ({ notes, ...rest }) => {
  const config = {
    Accept: 'application/json',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user_token')}`,
    },
  };

  async function handleDeleteNote(id: number) {
    if (id != null) {
      await api
        .delete('note/delete/' + id, config)
        .then((response) => {
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
        {notes.map((note: Note) => (
          <CPNote key={note.id}>
            <Link to={`/editor/${note.id}`}>
              <FaStickyNote className="icon" size={40} />
              <div>
                <h4>{note.title}</h4>
                <p>{note.text}</p>
              </div>
            </Link>
          </CPNote>
        ))}
      </ContentNotes>
    </Content>
  );
};

export default ListNotes;
