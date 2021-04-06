import React from 'react';
import { Content } from './styles';
import InputText from '../../components/InputText';
import logo from '../../assets/Logo.svg';
import Button from '../../components/Button';

const ResendEmail = () => {
  return (
    <Content>
      <form className="form-body">
        <img src={logo} width="40%" alt="Notepad Multiplatform" />
        <h3>Reenviar email:</h3>
        <InputText type="email" name="email" placeholder="Email" />
        <div style={{ marginTop: -10 }}>
          <Button text="Reenviar" color="#F2808A" />
          <Button text="Fazer Login" color="#BF9B6F" />
        </div>
      </form>
    </Content>
  );
};

export default ResendEmail;
