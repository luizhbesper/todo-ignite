import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

export default function Task({ id, content, completed, completeTask, deleteTask }) {

  const handleCompleteTask = () => {
    completeTask(id);
  }

  const handleDeleteTask = () => {
    deleteTask(id);
  }

  return (
    <div className={styles.task}>
      <input 
        type="checkbox" 
        id={`checkbox-${id}`}
        className={styles.checkbox}
        checked={completed}
        onChange={handleCompleteTask}
      />
      
      <label 
        htmlFor={`checkbox-${id}`}
        className={styles.customCheckbox}
      >
        <span className={styles.checkmark}></span>
      </label>
      <p className={styles.taskDescription}>
        {content}
      </p>
      <Trash 
        size={18} 
        className={styles.icon}
        onClick={handleDeleteTask}
      />
    </div>
  );
}
