import React from 'react';
import { Button as Btn } from './styles';

interface DataBtn {
  color: string;
  text: string;
}

const Button: React.FC<DataBtn> = ({ color, text, ...rest }) => {
  return <Btn style={{ backgroundColor: color }}>{text}</Btn>;
};

export default Button;
