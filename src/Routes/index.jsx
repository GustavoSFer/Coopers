import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Route, Routes } from 'react-router-dom';
import PageCoopers from '../Pages/PageCoopers';

function Routers() {
  return (
    <Routes>
      <Route path="/" element={<PageCoopers />} />
    </Routes>
  );
}

export default Routers;
