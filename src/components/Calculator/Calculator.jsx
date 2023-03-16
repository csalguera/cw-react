// styles
import styles from './Calculator.module.css'

const Calculator = (props) => {
  const {
    value,
    numA,
    numB,
    handleChange,
    handleClick
  } = props

  return (
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
  )
}

export default Calculator