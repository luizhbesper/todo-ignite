import styles from './Task.module.css';
import { Trash } from 'phosphor-react';

export default function Task({ id }) {
  return (
    <div className={styles.task}>
      <input type="checkbox" id={`checkbox-${id}`} className={styles.checkbox} />
      <label htmlFor={`checkbox-${id}`} className={styles.customCheckbox}>
        <span className={styles.checkmark}></span>
      </label>
      <p className={styles.taskDescription}>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames ger.
      </p>
      <Trash size={18} className={styles.icon} />
    </div>
  );
}
