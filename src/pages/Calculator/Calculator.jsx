// npm packages
import { useState } from "react";
import { CodeBlock, obsidian } from "react-code-blocks";

// components
import CalculatorCodeBlock from "../../components/CalculatorCodeBlock/CalculatorCodeBlock";

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
      <main className="page-container">
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
        <article className={styles.article}>
          <h2>Function Explanations</h2>
          <p>
            The follwing functions were written in React using state to make the calculator above function. For reference, <b><i>setValue</i></b> can be interpreted as <b><i>return</i></b> if written in plain JavaScript.
          </p>
          <h3>Add</h3>
          <CalculatorCodeBlock
            operation={add}
          />
          <p>
            The add function takes in two parameters: a and b. In order to prevent concatenation, both values are parsed into integers with the parseInt method. Finally, the state of value is set to the sum of arguments a and b.
          </p>
          <h3>Subtract</h3>
          <CalculatorCodeBlock
            operation={subtract}
          />
          <p>
            The subtract function takes in two parameters: a and b. No concatenation occurs, therefore the value can be set directly to the difference between the first value and the second value.
          </p>
          <h3>Multiply</h3>
          <CalculatorCodeBlock
            operation={multiply}
          />
          <p>
            The multiply function takes in two parameters: a and b. Similar to the subtract function, no concatenation occurs, thus the value can be set directly to the multiplication of both values.
          </p>
        </article>
      </main>
    </>
  )
}

export default Calculator