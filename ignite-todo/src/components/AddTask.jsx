import { useState } from 'react'
import styles from './AddTask.module.css';
import { PlusCircle } from "phosphor-react";

export default function AddTask({ addTask }) {
  const [submitAllowed, setSubmitAllowed] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    addTask({
      content: event.target.newTask.value,
      completed: false
    });
    event.target.reset();
    setSubmitAllowed(false);
  }

  const handleInputChange = (event) => {
    setSubmitAllowed(event.target.value.length > 0);
  }

  return (
    <form 
      className={styles.addTask}
      onSubmit={handleSubmit}
    >
        <input 
          placeholder='Adicione uma tarefa'
          name = 'newTask'
          required
          onChange={handleInputChange}
        />
        <button type='submit' disabled={!submitAllowed}>
            <strong>Criar</strong>
            <PlusCircle 
                size={16}
            />
        </button>
    </form>
  )
}
