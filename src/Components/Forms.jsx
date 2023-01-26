import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';

function Forms() {
  const [name, setName] = useState('');

  return (
    <form action="caminho" method="post">
      <img src="mulher" alt="user" />
      <img src="mulher" alt="get in touch" />
      <div className="mb-3 teste">
        <Input
          type="text"
          name="Your name"
          handleChange={(e) => setName(e.target.value)}
          value={name}
          text="type your name here."
          sty="border2"
        />
      </div>
      <div>
        <Input
          type="text"
          name="Email*"
          handleChange={(e) => setName(e.target.value)}
          value={name}
          text="example@example.com"
          sty="border1"
        />
        <Input
          type="number"
          name="Phone*"
          handleChange={(e) => setName(e.target.value)}
          value={name}
          text="( )___-___"
          sty="border1 ms-2"
        />
      </div>
      <div>
        <Input
          type="textarea"
          name="Message*"
          handleChange={(e) => setName(e.target.value)}
          value={name}
          text="type what you want to say to us."
          sty="border1 area"
        />
      </div>
      <div className="text-center">
        <Button sty="btn-green btn-all mb-4">SEND NOW</Button>
      </div>
    </form>
  );
}

export default Forms;
