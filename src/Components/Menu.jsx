import React from 'react';
import Button from './Button';
import logo from '../imagens/logo.png';

function Menu() {
  return (
    <nav className="d-flex justify-content-between mt-2">
      <img src={logo} alt="" className="logo" />
      <Button sty="btn-black">Entrar</Button>
    </nav>
  );
}

export default Menu;
