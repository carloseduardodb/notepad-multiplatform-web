import React from 'react';
import { Input as IPT, Content } from './styles';

interface Props {
  name: string;
  placeholder: string;
  type: string;
}

const Input: React.FC<Props> = ({ name, placeholder, type, ...rest }) => {
  return (
    <Content>
      <IPT type={type} id={name} placeholder={placeholder} />
    </Content>
  );
};

export default Input;
