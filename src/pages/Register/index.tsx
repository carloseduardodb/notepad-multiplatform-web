import React, { useRef } from 'react';
import { Content } from './styles';
import InputText from '../../components/InputText';
import logo from '../../assets/Logo.svg';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationsErrors from '../../utils/getValidationsErrors';
import { FormHandles } from '@unform/core';

interface registerData {
  name: string;
  email: string;
  password: string;
  rpPassword: string;
}

const Register = () => {
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: registerData) {
    try {
      const schema = Yup.object().shape({
        name: Yup.string().min(6).required(),
        email: Yup.string().email().required(),
        password: Yup.string().min(6).required(),
        rpPassword: Yup.string().min(6).required(),
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
        <Link className="return-login" to="/login">
          <FiArrowLeft color="#fff" size={40} />
        </Link>
        <h3>Cadastrar</h3>
        <InputText type="text" name="name" placeholder="Nome" />
        <InputText type="email" name="email" placeholder="Email" />
        <InputText type="password" name="password" placeholder="Senha" />
        <InputText
          type="password"
          name="rpPassword"
          placeholder="Repita sua senha"
        />
        <div className="options">
          <Link to="/resend-email">
            <a href="#">Esqueci a senha</a>
          </Link>
        </div>

        <div style={{ marginTop: 10 }}>
          <Button type="submit" text="Registrar" color="#F2808A" />
        </div>
      </Form>
    </Content>
  );
};
export default Register;
