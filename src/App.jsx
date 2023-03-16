// npm packages
import { Route, Routes } from 'react-router-dom';

// page components
import Landing from './pages/Landing/Landing';
import Calculator from './pages/Calculator/Calculator';

// components
import Nav from './components/Nav/Nav';

// styles
import './App.css';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route
          path='/'
          element={<Landing />}
        />
        <Route
          path='/calculator'
          element={<Calculator />}
        />
      </Routes>
    </>
  )
}

export default App;
