import React from 'react';
import Button from './Button';
import logo from '../imagens/logo.png';

function Menu() {
  return (
    <header className="d-flex justify-content-between mt-2">
      <img src={logo} alt="" className="logo" />
      <Button sty="btn-black">Entrar</Button>
    </header>
  );
}

export default Menu;
