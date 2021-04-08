import React, { useRef } from 'react';
import { Content } from './styles';
import InputText from '../../components/InputText';
import logo from '../../assets/Logo.svg';
import Checkbox from '../../components/Checkbox';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationsErrors from '../../utils/getValidationsErrors';
import { FormHandles } from '@unform/core';

interface loginData {
  email: string;
  password: string;
}

const Login = () => {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: loginData) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
      });
      await schema.validate(data, {
        abortEarly: false,
      });
      //Validation passed
      console.log(data);
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
    </Content>
  );
};

export default Login;
