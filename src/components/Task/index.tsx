import styles from './Task.module.css'
import {Trash} from 'phosphor-react'

export function Task() {
    return (
        <div className={styles.container}>

                <label className={styles.checkboxContainer}>
                    <input
                        type="checkbox"
                    />
                    <span className={styles.checkmark}></span>
                </label>

            <span className={styles.title}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
            <button>
                <Trash size={24} />
            </button>
        </div>

    )
}