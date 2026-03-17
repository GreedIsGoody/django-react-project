import react from 'react'
import {BrowserRouter, Routes, Route, Navigation} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import NotFound from './pagesNotFound '
import ProtectedRoute from './components/ProtectedRoute'

function Logout() {
  localStorage.clear()
  return <Navigate to='/login'/>
}

function RegistAndLogout() {
  localStorage.clear()
  return <Register />
}

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <ProtectedRoute>
          <Home />
        </ProtectedRoute>
      }/>

      <Route path='/login' element={
        <Login/>
      }/>
      <Route path='/register' element={
        <Register/>
      }/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
