import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { PlusCircle, ClipboardText } from 'phosphor-react'
import './global.css'
import { Info } from './components/Info'
import { Task } from './components/Task'

function App() {
  const task = false

  return (
    <>
      <Header />
      <div className={styles.container}>
        <main>
          <form className={styles.task}>
            <Input placeholder='Adicione uma nova tarefa' />
            <button type='submit'>
              Criar
              <PlusCircle size={24} />
            </button>
          </form>
          <div className={styles.taskList}>
            <header>
              <Info hasTask text='Tarefas criadas' counter='0' />
              <Info text='Concluídas' counter='0' />
            </header>
            <div className={styles.content}>
              {task ?
              <>
                <Task />
                <Task />
              </>
                : <div className={styles.contentEmpty}>
                  <ClipboardText size={56} />
                  <div>
                    <span>Você ainda não tem tarefas cadastradas</span>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                  </div>
                </div>}
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
