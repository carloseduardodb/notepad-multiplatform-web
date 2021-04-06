import React from 'react';
import { Content } from './styles';
import Navbar from '../../components/Navbar';
import NoteTitle from '../../components/NoteTitle';
import NoteText from '../../components/NoteText';
import Button from '../../components/Button';

const Editor = () => {
  return (
    <Content>
      <div className="dashboard">
        <Navbar />
        <div className="action-buttons">
          <Button color="#BF9B6F" text="Remover" />
          <Button color="#F2808A" text="Adicionar" />
        </div>
        <div className="inputs-note">
          <NoteTitle />
          <NoteText />
        </div>
      </div>
    </Content>
  );
};

export default Editor;
