import React from 'react';
import { Content } from './styles';
import InputText from '../../components/InputText';
import logo from '../../assets/Logo.svg';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';

const Login = () => {
  return (
    <Content>
      <form className="form-body">
        <img src={logo} width="40%" alt="Notepad Multiplatform" />
        <h3>Entrar</h3>
        <InputText type="email" name="email" placeholder="Email" />
        <InputText type="password" name="password" placeholder="Senha" />
        <div className="options">
          <Checkbox />
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

export default Login;
