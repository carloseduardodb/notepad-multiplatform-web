import React, { ButtonHTMLAttributes } from 'react';
import { Button as Btn } from './styles';
import { FiChevronRight, FiLogOut, FiTrash } from 'react-icons/fi';

interface DataBtn extends ButtonHTMLAttributes<HTMLButtonElement> {
  color: string;
  text: string;
}

const Button: React.FC<DataBtn> = ({ color, text, ...rest }) => {
  if (
    text.includes('Nome') ||
    text.includes('Senha') ||
    text.includes('Logout') ||
    text.includes('Apagar Conta')
  ) {
    return (
      <Btn
        style={{
          backgroundColor: color,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        {...rest}
      >
        {text}

        {text == 'Logout' && <FiLogOut size={20} />}

        {text == 'Apagar Conta' && <FiTrash size={20} />}

        {text.includes('Nome') && <FiChevronRight size={20} />}

        {text.includes('Senha') && <FiChevronRight size={20} />}
      </Btn>
    );
  } else {
    return (
      <Btn style={{ backgroundColor: color }} {...rest}>
        {text}
      </Btn>
    );
  }
};

export default Button;
