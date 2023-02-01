import React, { useState } from 'react';
import Button from './Button';
import Input from './Input';
import getIn from '../imagens/get-in.png';
import user from '../imagens/user.jpeg';

function Forms() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  return (
    <form action="caminho" method="post">
      <img src={user} alt="user" className="user" />
      <div className="text-start">
        <img src={getIn} alt="get in touch" />
      </div>
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
          handleChange={(e) => setEmail(e.target.value)}
          value={email}
          text="example@example.com"
          sty="border1"
        />
        <Input
          type="number"
          name="Phone*"
          handleChange={(e) => setPhone(e.target.value)}
          value={phone}
          text="( )____-____"
          sty="border1 ms-2"
        />
      </div>
      <div>
        <Input
          type="textarea"
          name="Message*"
          handleChange={(e) => setMessage(e.target.value)}
          value={message}
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
