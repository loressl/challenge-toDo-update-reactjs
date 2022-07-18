import { ClipboardText } from 'phosphor-react'
import { Info } from '../Info'
import { Task } from '../Task'
import {TaskProps} from '../../utils/interfaces'
import styles from './TaskList.module.css'

interface TaskListComponentProps {
    taskList: TaskProps[]
    onToggleTask: (id: string) => void
    onRemoveTask: (id: string) => void
}

export function TaskList({taskList, onToggleTask, onRemoveTask}: TaskListComponentProps) {
    const totalFinished = taskList.reduce((sumTotal, task)=>{
        if(task.isComplete) {
            sumTotal += 1
        }
        return sumTotal
    }, 0)

    return (
        <div className={styles.taskList}>
            <header>
                <Info hasTask text='Tarefas criadas' counter={taskList.length} />
                <Info text='Concluídas' counter={taskList.length} finished={totalFinished}/>
            </header>
            <div className={styles.content}>
                {taskList.length > 0 ?
                    <>
                        {taskList.map(task => 
                            <Task 
                                key={task.id}
                                task={task}
                                onToggleTask={() => onToggleTask(task.id)}
                                onRemoveTask={() => onRemoveTask(task.id)}
                            />
                        )}
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