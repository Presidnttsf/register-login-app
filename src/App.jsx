import './App.css'
import Login from './Login'
import SignUp from './SignUp'
import Home from "./Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProtectedRoutes } from './Services/ProtectedRoutes'


function App() {

  return (


    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        {/* protected routes */}
        <Route path="/" element={<ProtectedRoutes />}>
          <Route path='/' element={<Home />} />
        </Route>
      </Routes>
    </Router>

  )
}

export default App
