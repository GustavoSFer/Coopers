import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../Components/Input';
import Button from '../Components/Button';
import { loginUser } from '../Services';
import imgLogin from '../imagens/login.png';
import MyContext from '../MyContext/MyContext';

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msgErro, setMsgErro] = useState(false);
  const { active, setActive } = useContext(MyContext);

  const closeClick = () => {
    setActive(!active);
  };

  const handleClick = async () => {
    try {
      const body = { email, password };
      const login = await loginUser('/user', body);
      setMsgErro('');
      localStorage.setItem('user', JSON.stringify(login));
      setActive(!active);
      setEmail('');
      setPassword('');
      history('/');
      document.location.reload(true);
    } catch (error) {
      setMsgErro(error);
    }
  };

  const logo = {
    width: '200px',
  };

  return (
    <main className="login">
      <div className="row">
        <div className="text-end">
          <Button click={closeClick} sty="fw-bold">Close</Button>
        </div>
        <img src={imgLogin} alt="logo da empresa" style={logo} className="col-5" />
        <div className="col-5 ps-5 p-3">
          <h2 className="fw-bolder">Sign in</h2>
          <h3>to access your list</h3>
        </div>
      </div>
      <form action="" method="post" className="p-5">
        <div className="mb-3 login-input">
          <Input
            type="text"
            name="E-mail"
            handleChange={(e) => setEmail(e.target.value)}
            value={email}
            sty="border2"
          />
        </div>
        <div className="mb-3 login-input">
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
            sty="btn-color w-75"
            dataTestId="btn-entrar"
          >
            Sign in
          </Button>
        </div>
        { msgErro && <p className="text-danger text-center">E-mail ou senha incorreto!!!</p> }
      </form>
      <div className="text-center">
        <p className="m-3">
          Não tem uma conta?
          <Link to="/cadastro" className="register">Registre-se</Link>
        </p>
      </div>
    </main>
  );
}

export default Login;
