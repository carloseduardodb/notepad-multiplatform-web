import React from 'react';
import { Content } from './styles';
import InputText from '../../components/InputText';
import logo from '../../assets/Logo.svg';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Form } from '@unform/web';

const ResendEmail = () => {
  return (
    <Content>
      <Form onSubmit={() => {}} className="form-body">
        <img src={logo} width="40%" alt="Notepad Multiplatform" />
        <Link className="return-login" to="/login">
          <FiArrowLeft color="#fff" size={40} />
        </Link>
        <h3>Reenviar email:</h3>
        <InputText type="email" name="email" placeholder="Email" />
        <div style={{ marginTop: -10 }}>
          <Button type="button" text="Reenviar" color="#F2808A" />
          <Button type="button" text="Fazer Login" color="#BF9B6F" />
        </div>
      </Form>
    </Content>
  );
};

export default ResendEmail;
