import React from 'react';
import { Content } from './styles';
import { FiX } from 'react-icons/fi';

interface dataMessage {
  title: string;
  description: string;
}

const Message: React.FC<dataMessage> = ({ title, description }) => {
  function disable() {
    document.getElementById('teste')?.remove();
  }
  return (
    <Content id="teste">
      <a onClick={disable} href="#">
        <FiX className="icon" />
      </a>
      <h4>{title}</h4>
      <p>{description}</p>
    </Content>
  );
};

export default Message;
