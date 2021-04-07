import React from 'react';
import { Content } from './styles';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import logo from '../../assets/Logo.svg';
import ReactCodeInput from 'react-verification-code-input';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const VerifyAccount = () => {
  return (
    <Content>
      <form className="form-body">
        <img src={logo} width="40%" alt="Notepad Multiplatform" />
        <Link className="return-login" to="/login">
          <FiArrowLeft color="#fff" size={40} />
        </Link>
        <h3>Verificação de email</h3>
        <ReactCodeInput fields={7} />
        <Button color="#BF9B6F" text="Verificar" />
      </form>
    </Content>
  );
};

export default VerifyAccount;
