import React, { useState } from 'react';
import { Content } from './styles';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import logo from '../../assets/Logo.svg';
import ReactCodeInput from 'react-verification-code-input';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import { FiArrowLeft } from 'react-icons/fi';
import { toast, ToastContainer } from 'react-toastify';
import monitorLocation from '../../utils/monitorLocation';

const VerifyAccount = () => {
  monitorLocation();
  const [code, setCode] = useState('');
  const history = useHistory();

  const config = {
    Accept: 'application/json',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      'Content-Type': 'application/json',
    },
  };

  function handleSubmit() {
    if (code.length === 7) {
      sendCode();
    } else {
      toast.error('Ooooops código muito pequeno!');
    }
  }

  function sendCode() {
    const hidrated_data = {
      email: localStorage.getItem('user_email'),
      code: code,
    };
    api
      .post('user/code-validation', hidrated_data, config)
      .then((response) => {
        if (response.status === 201) {
          history.push('/home');
        } else {
          toast.error(
            'Ooooops algo de errado não esta certo! Seu código está incorreto!',
          );
        }
      })
      .catch((error) => {
        toast.error(
          'Ooooops algo de errado não esta certo! Seu código está incorreto!',
        );
      });
  }

  return (
    <Content>
      <form className="form-body">
        <img src={logo} width="40%" alt="Notepad Multiplatform" />
        <Link className="return-login" to="/login">
          <FiArrowLeft color="#fff" size={40} />
        </Link>
        <h3>Verificação de email</h3>
        <ReactCodeInput type="text" onChange={setCode} fields={7} />
        <Button
          type="button"
          onClick={handleSubmit}
          color="#BF9B6F"
          text="Verificar"
        />
      </form>
      <ToastContainer />
    </Content>
  );
};

export default VerifyAccount;
