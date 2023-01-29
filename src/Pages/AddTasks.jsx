import React, { useState } from 'react';
import { tasks } from '../Services';
import Button from '../Components/Button';
import Input from '../Components/Input';

function AddTasks() {
  const [tarefa, setTarefa] = useState('');
  const [msg, setMsg] = useState('');

  const limpa = () => {
    setMsg('');
  };

  const add = async () => {
    await tasks('/', { task: tarefa, status: 'pendente' });
    setTarefa('');
    setMsg('Tarefa salva!!!');
    setTimeout(limpa, 2100);
  };

  return (
    <main className="">
      <div className="p-3">
        <Input
          type="text"
          name="Adicionar nova tarefa"
          text="Informe a nova tarefa"
          handleChange={(e) => setTarefa(e.target.value)}
          value={tarefa}
          sty="border2"
        />
        <div className="fw-bold text-dark">{msg}</div>
        <Button click={add} sty="btn-color">ADICIONAR</Button>
      </div>
    </main>
  );
}

export default AddTasks;
