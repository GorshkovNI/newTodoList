import React from "react";
import styles from './BodyTasks.module.css'

export const BodyTasks = ({children}) => {
    return(
        <div className={styles._}>
            {children}
        </div>
    )
}