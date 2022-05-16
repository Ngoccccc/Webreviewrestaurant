import logo from './logo.svg';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Auth from './components/Auth'
import AuthContextProvider from './contexts/AuthContext'
import Dashboard from './components/Dashboard'


function App() {
  return (
      
      
      <AuthContextProvider>
       <Routes>
         <Route path ='/' element ={<Auth/>} >
           <Route path='/' element={<Navigate to="/login" />} />
           <Route path='/login' element={<Login />}/>
           <Route path='/register' element={<Register />}/>


           <Route path='/dashboard' element={<Dashboard />}/>
         </Route>

       </Routes>
      </AuthContextProvider>
    
  )
}

export default App;
