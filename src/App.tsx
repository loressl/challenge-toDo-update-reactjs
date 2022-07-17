import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { PlusCircle, } from 'phosphor-react'
import './global.css'
import { TaskList } from './components/TaskList'
import {TaskListProps} from './utils/interfaces'
import {v4 as uuidv4} from 'uuid'

function App() {
  const [newTask, setNewTask] = useState('')
  const [taskList, setTaskList] = useState<TaskListProps[]>([])

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    setTaskList([...taskList, {
      id: uuidv4(),
      title: newTask,
      isComplete: false
    }])
    setNewTask('')
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('')
    setNewTask(event.target.value)
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Não pode salvar como um campo vazio!')
  }

  const isNewTask = newTask.length === 0

  return (
    <>
      <Header />
      <div className={styles.container}>
        <main>
          <form onSubmit={handleCreateNewTask} className={styles.task}>
            <Input 
              placeholder='Adicione uma nova tarefa'
              value={newTask} 
              onChange={handleNewTaskChange}
              onInvalid={handleNewTaskInvalid}
              required
            />
            <button type='submit' disabled={isNewTask}>
              Criar
              <PlusCircle size={24} />
            </button>
          </form>
          <TaskList taskList={taskList} />
        </main>
      </div>
    </>
  )
}

export default App
