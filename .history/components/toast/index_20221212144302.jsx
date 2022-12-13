import React from 'react'
import styles from './toast.module.css'

const ToastModal = (props) => {
  return (
    <div className={props.toasterr ? `${styles["toast"]} ${styles["on"]}` : styles["toast"]}>
        <h6>{props.children}</h6>
    </div>
  )
}

export default ToastModal