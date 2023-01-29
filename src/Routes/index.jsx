import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import Cadastro from '../Pages/Cadastro';
import PageCoopers from '../Pages/PageCoopers';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<PageCoopers />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  );
}

export default Routers;
