import React from 'react';
import Button from '../Components/Button';
import Menu from '../Components/Menu';

function PageCoopers() {
  return (
    <div>
      <div className="seta">
        <main className="container">
          <Menu />
        </main>
        <div className="escritorio" />
        <div className="daily">
          <h1>Organize</h1>
          <p className="dailly-jobs">your daily jobs</p>
          <p className="fw-bold">The only way to get things done</p>
          <Button sty="btn-color">Go to To-do list</Button>
        </div>
      </div>
    </div>
  );
}

export default PageCoopers;
