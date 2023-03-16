// npm packages
import { useState } from "react";
import { CodeBlock, CopyBlock, obsidian } from "react-code-blocks";

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
          <h3>Add</h3>
          <div className={styles['code-block']}>
            <CopyBlock
              text={add}
              theme={obsidian}
            />
            <CodeBlock
              text={add}
              theme={obsidian}
            />
          </div>
          <p>
            The add function takes in two parameters: a and b. In order to prevent concatenation, both values are parsed into integers with the parseInt method. Finally, the state of value is set to the sum of arguments a and b.
          </p>
          <h3>Subtract</h3>
          <div className={styles['code-block']}>
            <CopyBlock
            text={subtract}
            theme={obsidian}
            />
            <CodeBlock
            text={subtract}
            theme={obsidian}
            />
          </div>
          <p>
            The subtract function takes in two parameters: a and b. No concatenation occurs, therefore the value can be set directly to the difference between the first value and the second value.
          </p>
        </article>
      </main>
    </>
  )
}

export default Calculator