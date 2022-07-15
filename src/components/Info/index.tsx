import styles from './Info.module.css'
import classNames from 'classnames'

interface InfoProps {
    text: string
    counter: string
    hasTask?: boolean
}

export function Info({text, counter, hasTask= false}: InfoProps) {
    return(
        <div className={classNames(styles.infoComponent, hasTask ? styles.textTask:styles.textFinish)}>
            <span className={styles.text}>{text}</span>
            <span className={styles.counter}>{counter}</span>
        </div>
    )
}