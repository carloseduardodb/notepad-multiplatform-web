import React from 'react';
import { Content } from './styles';
import InputText from '../../components/InputText';
import logo from '../../assets/Logo.svg';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

const Register = () => {
  return (
    <Content>
      <form className="form-body">
        <img src={logo} width="40%" alt="Notepad Multiplatform" />
        <h3>Cadastrar</h3>
        <InputText type="text" name="name" placeholder="Nome" />
        <InputText type="email" name="email" placeholder="Email" />
        <InputText type="password" name="password" placeholder="Senha" />
        <InputText
          type="rp-password"
          name="password"
          placeholder="Repita sua senha"
        />
        <div className="options">
          <a href="#">Esqueci a senha</a>
        </div>

        <div style={{ marginTop: 10 }}>
          <Button text="Entrar" color="#BF9B6F" />
          <Button text="Registrar" color="#F2808A" />
        </div>
      </form>
    </Content>
  );
};

export default Register;
