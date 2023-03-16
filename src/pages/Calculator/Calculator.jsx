// npm packages
import { useState } from "react";

// styles
import styles from './Calculator.module.css'

const Calculator = () => {
  const [numA, setNumA] = useState(0)
  const [numB, setNumB] = useState(0)
  const [value, setValue] = useState(0)

  function add(a, b) {
    setValue(parseInt(a) + parseInt(b))
  }

  function subtract(a, b) {
    setValue(a - b)
  }

  function multiply(a, b) {
    setValue(a * b)
  }

  function divide(a, b) {
    setValue(a / b)
  }

  function handleChange(evt) {
    evt.target.name === 'numA'
    ?
    setNumA(evt.target.value)
    :
    setNumB(evt.target.value)
  }

  function handleClick(evt) {
    evt.preventDefault()

    evt.target.textContent === '+'
    ?
    add(numA, numB)
    :
    evt.target.textContent === '-'
    ?
    subtract(numA, numB)
    :
    evt.target.textContent === 'x'
    ?
    multiply(numA, numB)
    :
    divide(numA, numB)
  }

  return (
    <>
      <h1>Calculator</h1>
      <div className={styles.container}>
        <h3 className={styles.value}>{value}</h3>
      <form className={styles.form}>
        <div className={styles['input-els-container']}>
          <input name="numA" type="number" value={numA} onChange={handleChange} />
          <input name="numB" type="number" value={numB} onChange={handleChange} />
        </div>
        <div className={styles['button-els-container']}>
          <button onClick={handleClick}>
            +
          </button>
          <button onClick={handleClick}>
            -
          </button>
          <button onClick={handleClick}>
            x
          </button>
          <button onClick={handleClick}>
            ÷
          </button>
        </div>
      </form>
      </div>
    </>
  )
}

export default Calculator