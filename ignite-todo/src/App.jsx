import { useState } from 'react'

import Header from './components/Header'
import AddTask from './components/AddTask'
import TaskArea from './components/TaskArea'

import './global.css'
import styles from './App.module.css'

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    const task = {
      id: Date.now(),
      content: newTask.content,
      completed: newTask.completed
    }
    setTasks([task, ...tasks])
  }

  const completeTask = (id) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        task.completed = !task.completed
      }
      return task
    }))
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id))
  }
  

  return (
    <>
      <Header />
      <div className={styles.app}>
        <AddTask 
          addTask={addTask}
        />
        <TaskArea 
          tasks={tasks}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      </div>
    </>
  )
}

export default App
