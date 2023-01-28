import React, { useContext } from 'react';
import Button from './Button';
import logo from '../imagens/logo.png';
import Login from '../Pages/Login';
import MyContext from '../MyContext/MyContext';

function Menu() {
  const { active, setActive } = useContext(MyContext);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="d-flex justify-content-between mt-2">
      <img src={logo} alt="" className="logo" />
      <Button click={handleClick} sty="btn-black">Entrar</Button>
      <div className={active ? 'iconActive' : 'icon'}>
        <Login />
      </div>
    </nav>
  );
}

export default Menu;
