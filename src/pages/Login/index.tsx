import React from 'react';
import { Content } from './styles';
import InputText from '../../components/InputText';
import logo from '../../assets/Logo.svg';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

interface loginData {
  email: string;
  password: string;
}

const Login = () => {
  function handleSubmit(data: loginData) {
    alert('Email: ' + data.email);
  }

  return (
    <Content>
      <Form onSubmit={handleSubmit} className="form-body">
        <img src={logo} width="40%" alt="Notepad Multiplatform" />
        <h3>Entrar</h3>
        <InputText type="email" name="email" placeholder="Email" />
        <InputText type="password" name="password" placeholder="Senha" />
        <div className="options">
          <Checkbox />
          <Link to="/resend-email">Esqueci a senha</Link>
        </div>

        <div style={{ marginTop: 10 }}>
          <Button type="submit" text="Entrar" color="#BF9B6F" />
          <Link to="/register">
            <Button type="button" text="Registrar" color="#F2808A" />
          </Link>
        </div>
      </Form>
    </Content>
  );
};

export default Login;
