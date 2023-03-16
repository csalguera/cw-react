// npm packages
import { useState } from "react";

// components
import Calculator from "../../components/Calculator/Calculator";
import CalculatorCodeBlock from "../../components/CalculatorCodeBlock/CalculatorCodeBlock";

// styles
import styles from './CalculatorPage.module.css'

const CalculatorPage = () => {
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
        <Calculator
          value={value}
          numA={numA}
          numB={numB}
          handleChange={handleChange}
          handleClick={handleClick}
        />
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
            The subtract function takes in two parameters: a and b. No concatenation occurs, therefore the total value can be set directly to the difference between the first value and the second value.
          </p>
          <h3>Multiply</h3>
          <CalculatorCodeBlock
            operation={multiply}
          />
          <p>
            The multiply function takes in two parameters: a and b. Similar to the subtract function, no concatenation occurs, thus the total value can be set directly to the multiplication of both values.
          </p>
          <h3>Divide</h3>
          <CalculatorCodeBlock
            operation={divide}
          />
          <p>
            The divide function takes in two parameters: a and b. Just like the previous two functions, it does not concatenate, the total value can be directly set to the division of the first value by the second value.
          </p>
        </article>
      </main>
    </>
  )
}

export default CalculatorPage