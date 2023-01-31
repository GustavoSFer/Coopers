import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { tasks } from '../Services';
import Button from '../Components/Button';
import Input from '../Components/Input';

function AddTasks({ close }) {
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
    <main>
      <div className="text-end">
        <button type="button" onClick={close} className="p-2 fw-bold">Close</button>
      </div>
      <div className="p-3">
        <Input
          type="text"
          name="Adicionar nova tarefa"
          text="Informe a nova tarefa"
          handleChange={(e) => setTarefa(e.target.value)}
          value={tarefa}
          sty="border2 input-tesk"
        />
        <div className="fw-bold text-dark">{msg}</div>
        <Button click={add} sty="btn-color w-100">ADICIONAR</Button>
      </div>
    </main>
  );
}

AddTasks.propTypes = {
  close: PropTypes.func.isRequired,
};

export default AddTasks;
