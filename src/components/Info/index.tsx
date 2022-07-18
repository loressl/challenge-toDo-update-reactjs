import styles from './Info.module.css'
import classNames from 'classnames'

interface InfoProps {
    text: string
    counter: number
    hasTask?: boolean
    finished?: number
}

export function Info({text, counter, hasTask= false, finished}: InfoProps) {
    const totalTasks = hasTask ? counter: `${finished} de ${counter}`

    return(
        <div className={classNames(styles.infoComponent, hasTask ? styles.textTask:styles.textFinish)}>
            <span className={styles.text}>{text}</span>
            <span className={styles.counter}>{totalTasks}</span>
        </div>
    )
}