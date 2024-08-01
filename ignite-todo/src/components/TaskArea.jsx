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

export default function TaskArea({ tasks, completeTask, deleteTask }) {
    return (
        <div className={styles.taskArea}>
            <header>
                <div>
                    <strong>Tarefas Criadas</strong>
                    <div className={styles.counter}>
                        <strong>{tasks.length}</strong>
                    </div>
                </div>
                <div>
                    <strong>Concluídas</strong>
                    <div className={styles.counter}>
                        <strong>{tasks.filter(task => task.completed).length + " de " + tasks.length}</strong>
                    </div>
                </div>
            </header>
            {
                tasks.length === 0 ? noTask() : tasks.map(task => (
                    <Task 
                        key = {task.id}
                        id = {task.id}
                        content = {task.content}
                        completed = {task.completed}
                        completeTask = {completeTask}
                        deleteTask = {deleteTask}
                    />
                ))
            }
        </div>
    )
}
