import React, { useRef } from 'react';
import { Content } from './styles';
import InputText from '../../components/InputText';
import logo from '../../assets/Logo.svg';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';
import getValidationsErrors from '../../utils/getValidationsErrors';
import monitorLocation from '../../utils/monitorLocation';

interface resendData {
  email: string;
}

const ResendEmail = () => {
  monitorLocation();
  const formRef = useRef<FormHandles>(null);

  async function handleSubmit(data: resendData) {
    try {
      const schema = Yup.object().shape({
        email: Yup.string().email().required(),
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
        <h3>Reenviar email:</h3>
        <InputText type="email" name="email" placeholder="Email" />
        <div style={{ marginTop: -10 }}>
          <Button type="submit" text="Reenviar" color="#F2808A" />
        </div>
      </Form>
    </Content>
  );
};

export default ResendEmail;
