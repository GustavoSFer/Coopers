import React from 'react';
import Button from '../Components/Button';
import CardGoodThings from '../Components/CardGoodThings';
import Menu from '../Components/Menu';
import teaser from '../imagens/teaser.jpg';
import makes from '../imagens/makes.jpeg';
import custura from '../imagens/custura.jpeg';
import Forms from '../Components/Forms';

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
      <div className="skew">
        <header>
          <h2>To-do List</h2>
          <div className="width-list">
            <p>
              Drag and drop to set your main priorities, check
            </p>
            <p>
              when done and create what&apos;s new.
            </p>
          </div>
        </header>
      </div>

      <div className="d-flex justify-content-center list">
        <section>
          <div className="color-list-doing" />
          <div className="m-5">
            <h3 className="fs-2 fw-bold">To-do</h3>
            <p className="fs-4">Take a breath.</p>
            <p className="space-top fs-4">Start doing.</p>
          </div>
          <Button sty="btn-black btn-all mb-4">erase all</Button>
        </section>

        <section>
          <div className="color-list-done" />
          <div className="m-5">
            <h3 className="fs-2 fw-bold">Done</h3>
            <p className="fs-4">Congratulions!</p>
            <p className="space-top fs-4">You have done 5 taks</p>
          </div>
          <Button sty="btn-black btn-all mb-4">erase all</Button>
        </section>

      </div>

      <div className="things d-flex justify-content-center">
        <div className="good-things">
          <h3 className="position-things">good things</h3>
        </div>
        <div className="cardGood">
          {/* Se tivesse as informações em uma APi poderia fazer usando o map */}
          <CardGoodThings
            img={custura}
            text="Organize your daily job enhance your life performance"
          />
          <CardGoodThings
            img={makes}
            text="Mark one activity as done makes your brain understands the power of doing."
          />
          <CardGoodThings
            img={teaser}
            text="Careful with missunderstanding the difference between a list of things and a list of desires."
          />
        </div>
        <div className="forms">
          <Forms />
        </div>
      </div>

    </div>
  );
}

export default PageCoopers;
