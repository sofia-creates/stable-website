import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import OurHorsesPage from './pages/OurHorsesPage'

import './App.css'
import Nav from "./components/Nav"

function App() {

  return (
    <Router>
     <Nav />
      
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/our-horses" element={<OurHorsesPage/>} />
      </Routes>
    </Router>
  )
}

export default App
