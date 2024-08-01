import Header from './components/Header'
import AddTask from './components/AddTask'
import TaskArea from './components/TaskArea'

import './global.css'
import styles from './App.module.css'

function App() {
  return (
    <>
    <Header />
    <div className={styles.app}>
      <AddTask />
      <TaskArea />
    </div>
    </>
  )
}

export default App
