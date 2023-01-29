import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { loginUser } from '../Services';

function Cadastro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const history = useNavigate();

  const redirect = () => {
    setEmail('');
    setPassword('');
    history('/');
  };

  const handleClick = async () => {
    try {
      await loginUser('/user/create', { email, password });
      setMsg('Cadastro Realizado com sucesso!');
      setTimeout(redirect, 1100);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <main className="cadastro seta">
      <h1 className="text-center">Cadastro de usuario</h1>
      <form action="" method="post" className="p-5">
        <div className="mb-3 teste">
          <Input
            type="text"
            name="E-mail"
            handleChange={(e) => setEmail(e.target.value)}
            value={email}
            sty="border2"
          />
        </div>
        <div className="mb-3 teste">
          <Input
            type="password"
            name="password"
            handleChange={(e) => setPassword(e.target.value)}
            value={password}
            sty="border2"
          />
        </div>
        <div className="text-center">
          <Button
            click={handleClick}
            sty="btn-color w-75 btn-border"
            dataTestId="btn-entrar"
          >
            Sign in
          </Button>
          <div>
            { msg }
          </div>
        </div>
      </form>
    </main>
  );
}

export default Cadastro;
