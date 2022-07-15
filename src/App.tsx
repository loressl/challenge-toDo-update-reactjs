import { useState } from 'react'
import styles from './App.module.css'
import { Header } from './components/Header'
import { Input } from './components/Input'
import { PlusCircle } from 'phosphor-react'
import './global.css'
import { Info } from './components/Info'

function App() {

  return (
    <>
      <Header/>
      <div className={styles.container}>
        <main>
          <form className={styles.task}>
            <Input placeholder='Adicione uma nova tarefa'/>
            <button type='submit'>
              Criar
              <PlusCircle size={24} />
            </button>
          </form>
          <div className={styles.taskList}>
            <header>
              <Info hasTask text='Tarefas criadas' counter='0'/>
              <Info text='Concluídas' counter='0'/>
            </header>
            <div className={styles.content}>
              sdj
            </div>
          </div>
        </main>
      </div>
    </>
  )
}

export default App
