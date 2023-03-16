// npm packages
import { CodeBlock, CopyBlock, obsidian } from 'react-code-blocks'

// styles
import styles from './CalculatorCodeBlock.module.css'

const CalculatorCodeBlock = (props) => {
  const {
    operation
  } = props

  return (
    <div className={styles['code-block']}>
      <CopyBlock
        text={operation}
        theme={obsidian}
      />
      <CodeBlock
        text={operation}
        theme={obsidian}
      />
    </div>
  )
}

export default CalculatorCodeBlock