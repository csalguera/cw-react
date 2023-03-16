// npm packages
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <>
      <Link to='/'>
        Home
      </Link>
      <Link to='/calculator'>
        Calculator
      </Link>
    </>
  )
}

export default Nav