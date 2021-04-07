import React from 'react';
import { Content } from './styles';
import InputText from '../../components/InputText';
import logo from '../../assets/Logo.svg';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

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
          <Link to="/resend-email">Esqueci a senha</Link>
        </div>

        <div style={{ marginTop: 10 }}>
          <Link to="/home">
            <Button text="Entrar" color="#BF9B6F" />
          </Link>
          <Link to="/register">
            <Button text="Registrar" color="#F2808A" />
          </Link>
        </div>
      </form>
    </Content>
  );
};

export default Login;
