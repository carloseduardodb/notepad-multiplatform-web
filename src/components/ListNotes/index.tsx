import React from 'react';
import { Note, Notes as ContentNotes, Content } from './styles';

interface Notes {
  note: {
    id: string;
    title: string;
    text: string;
  };
}

const ListNotes: React.FC<Notes> = ({ note, ...rest }) => {
  return (
    <Content>
      <ContentNotes>
        <Note>
          <a href="#">
            <img src="" alt="" />
            <div>
              <h4>{note.title}</h4>
              <p>{note.text}</p>
            </div>
          </a>
        </Note>
        <Note>
          <a href="#">
            <img src="" alt="" />
            <div>
              <h4>{note.title}</h4>
              <p>{note.text}</p>
            </div>
          </a>
        </Note>
        <Note>
          <a href="#">
            <img src="" alt="" />
            <div>
              <h4>{note.title}</h4>
              <p>{note.text}</p>
            </div>
          </a>
        </Note>
        <Note>
          <a href="#">
            <img src="" alt="" />
            <div>
              <h4>{note.title}</h4>
              <p>{note.text}</p>
            </div>
          </a>
        </Note>
        <Note>
          <a href="#">
            <img src="" alt="" />
            <div>
              <h4>{note.title}</h4>
              <p>{note.text}</p>
            </div>
          </a>
        </Note>
        <Note>
          <a href="#">
            <img src="" alt="" />
            <div>
              <h4>{note.title}</h4>
              <p>{note.text}</p>
            </div>
          </a>
        </Note>
        <Note>
          <a href="#">
            <img src="" alt="" />
            <div>
              <h4>{note.title}</h4>
              <p>{note.text}</p>
            </div>
          </a>
        </Note>
      </ContentNotes>
    </Content>
  );
};

export default ListNotes;
