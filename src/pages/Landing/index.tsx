import React from 'react';
import { Content } from './styles';
import Button from '../../components/Button';
import { useHistory } from 'react-router';

const Landing = () => {
  const history = useHistory();
  return (
    <Content>
      <div className="entry-or-register">
        <div className="image"></div>
      </div>
      <div className="texts" style={{ backgroundColor: '#011126' }}>
        <h1>
          <span>Notepad</span> Multiplatform
        </h1>
        <p>Sua maneira de anotar nunca mais será a mesma!</p>
        <div className="content-btn">
          <Button
            color="#f6644d"
            onClick={() => {
              history.push('/login');
            }}
            text="Entrar"
          />
          <Button
            onClick={() => {
              history.push('/register');
            }}
            color="#353440"
            text="Cadastrar"
          />
          <p>Developed By Carlos Eduardo Dias Batista</p>
        </div>
      </div>
    </Content>
  );
};

export default Landing;
