import styles from './Task.module.css'
import {Trash} from 'phosphor-react'
import {TaskProps} from '../../utils/interfaces'

type TaskElement = Omit<TaskProps, 'id'>

interface TaskComponentProps {
    task: TaskElement
    onToggleTask: () => void
    onRemoveTask: () => void
}

export function Task({task: {title, isComplete}, onToggleTask, onRemoveTask}: TaskComponentProps) {
    return (
        <div className={styles.container}>
                <label className={styles.checkboxContainer}>
                    <input
                        type="checkbox"
                        readOnly
                        checked={isComplete}
                        onClick={onToggleTask}
                    />
                    <span className={styles.checkmark}></span>
                </label>

            <span className={isComplete ? styles.completed:styles.title}>{title}</span>
            <button onClick={onRemoveTask}>
                <Trash size={24} />
            </button>
        </div>

    )
}