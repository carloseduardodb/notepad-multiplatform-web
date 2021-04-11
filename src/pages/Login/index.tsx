import React, { useRef, useState } from 'react';
import { Content } from './styles';
import InputText from '../../components/InputText';
import logo from '../../assets/Logo.svg';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationsErrors from '../../utils/getValidationsErrors';
import { FormHandles } from '@unform/core';
import api from '../../services/api';
import UserData from '../../class/UserData';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import monitorLocation from '../../utils/monitorLocation';

interface loginData {
  email: string;
  password: string;
}

interface dataUser {
  status: string;
  user: {
    id: number;
    name: string;
    email: string;
    email_verified_at: null | Date;
    created_at: Date;
    updated_at: Date;
  };
  token: string;
}

const Login = () => {
  monitorLocation();
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  async function sendData(data: loginData) {
    const { email, password } = data;

    const hidratedData = {
      device_name: navigator.userAgent,
      email: email,
      password: password,
    };

    async function saveUserToken(data: dataUser) {
      await localStorage.setItem('user_token', data.token);
      await localStorage.setItem('user_email', data.user.email);
      await localStorage.setItem(
        'user_verification_email',
        '' + data.user.email_verified_at,
      );
      await localStorage.setItem('user_name', data.user.name);
    }

    api
      .post<dataUser>('user/login', hidratedData, {
        headers: { 'Content-Type': 'application/json' },
      })
      .then((response) => {
        UserData.user = response.data.user;
        UserData.token = response.data.token;
        const { data } = response;
        saveUserToken(data);
        if (!!!data.user.email_verified_at) {
          history.push('/verify-account');
        } else {
          history.push('/home');
        }
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        toast.error('Usuário ou senha incorretos!');
      });
  }

  async function handleSubmit(data: loginData) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      sendData(data);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationsErrors(err);
        formRef.current?.setErrors(errors);
      }
    }
  }

  return (
    <Content>
      <Form ref={formRef} onSubmit={handleSubmit} className="form-body">
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
      <ToastContainer />
    </Content>
  );
};

export default Login;
