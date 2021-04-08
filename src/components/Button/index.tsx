import React, { ButtonHTMLAttributes } from 'react';
import { Button as Btn } from './styles';

interface DataBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  text: string;
}

const Button: React.FC<DataBtn> = ({ color, text, ...rest }) => {
  return (
    <Btn style={{ backgroundColor: color }} {...rest}>
      {text}
    </Btn>
  );
};

export default Button;
