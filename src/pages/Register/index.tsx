import { Content } from './styles';
import InputText from '../../components/InputText';
import logo from '../../assets/Logo.svg';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

const Register = () => {
  return (
    <Content>
      <form className="form-body">
        <img src={logo} width="40%" alt="Notepad Multiplatform" />
        <Link className="return-login" to="/login">
          <FiArrowLeft color="#fff" size={40} />
        </Link>
        <h3>Cadastrar</h3>
        <InputText type="text" name="name" placeholder="Nome" />
        <InputText type="email" name="email" placeholder="Email" />
        <InputText type="password" name="password" placeholder="Senha" />
        <InputText
          type="rp-password"
          name="password"
          placeholder="Repita sua senha"
        />
        <div className="options">
          <Link to="/resend-email">
            <a href="#">Esqueci a senha</a>
          </Link>
        </div>

        <div style={{ marginTop: 10 }}>
          <Link to="/confirm">
            <Button text="Registrar" color="#F2808A" />
          </Link>
        </div>
      </form>
    </Content>
  );
};

export default Register;
