import { ClipboardText } from 'phosphor-react'
import { Info } from '../Info'
import { Task } from '../Task'
import {TaskListProps} from '../../utils/interfaces'
import styles from './TaskList.module.css'

interface TaskListComponentProps {
    taskList: TaskListProps[]
}

export function TaskList({taskList}: TaskListComponentProps) {

    return (
        <div className={styles.taskList}>
            <header>
                <Info hasTask text='Tarefas criadas' counter='0' />
                <Info text='Concluídas' counter='0' />
            </header>
            <div className={styles.content}>
                {taskList.length > 0 ?
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
    )
}