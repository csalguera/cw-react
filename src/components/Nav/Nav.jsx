// npm packages
import { Link } from "react-router-dom"

// styles
import styles from './Nav.module.css'

const Nav = () => {
  return (
    <div className={styles['nav-bar']}>
      <Link to='/'>
        Home
      </Link>
      <Link to='/calculator'>
        Calculator
      </Link>
    </div>
  )
}

export default Nav