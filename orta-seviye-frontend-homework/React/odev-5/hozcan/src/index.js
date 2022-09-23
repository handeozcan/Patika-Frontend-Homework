import React from 'react'
import styles from './styles.module.css'

export const Text = ({text}) => {
  return <div className={styles.test}>Button Color: {text}</div>
}
export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Click on button colors: {text}</div>
}

export const ButtonColor =(props) => {
  return (
    <div className={styles.container}>
      <button
        className={props.type ? styles[props.type] : styles.primary}
        {...props}
      >
        {props.text}
      </button>
    </div>
  )
}

