import Task from './Task'
import styles from './TaskArea.module.css'
import { ClipboardText } from 'phosphor-react'

const noTask = () => {
    return (
        <div className={styles.noTask}>
            <ClipboardText size = {56} />
            <p><strong>Você ainda não tem tarefas cadastradas</strong></p>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}

export default function TaskArea() {
  return (
    <div className={styles.taskArea}>
        <header>
            <div>
                <strong>Tarefas Criadas</strong>
                <div className={styles.counter}>
                    <strong>0</strong>
                </div>
            </div>
            <div>
                <strong>Concluídas</strong>
                <div className={styles.counter}>
                    <strong >2 de 5</strong>
                </div>
            </div>
        </header>

        
            <Task id = {1} />
            <Task id = {2} />
            <Task id = {3} />
        
        
      
        
    </div>
  )
}
