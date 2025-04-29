import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Components from './pages/Components'
import Colors from './pages/Colors'
import About from './pages/About'
import Avatar from './pages/components/Avatar'
import Breadcrumb from './pages/components/Breadcrumb'
import Button from './pages/components/Button'
import './App.css'

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/components/*" element={<Components />}>
            <Route path="avatar" element={<Avatar />} />
            <Route path="breadcrumb" element={<Breadcrumb />} />
            <Route path="button" element={<Button />} />
          </Route>
          <Route path="/colors" element={<Colors />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App