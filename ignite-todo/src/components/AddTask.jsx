import styles from './AddTask.module.css';
import { PlusCircle } from "phosphor-react";

export default function AddTask() {
  return (
    <form className={styles.addTask}>
        <input placeholder='Adicione uma tarefa'/>
        <button type='submit'>
            <strong>Criar</strong>
            <PlusCircle 
                size={16}
            />
        </button>
    </form>
  )
}
