import { BrowserRouter as Router, Routes,  Route, Link} from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'

function App() {

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </Router>
  )
}

export default App
