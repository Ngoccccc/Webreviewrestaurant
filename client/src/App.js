import logo from './logo.svg';
import './App.css';
import {Routes, Route, Navigate} from 'react-router-dom';
import Login from './components/Login'
import Register from './components/Register'
import Auth from './components/Auth'
import AuthContextProvider from './contexts/AuthContext'
import Dashboard from './components/Dashboard'
import Home from './components/Home'
import RestaurantProvider from './contexts/RestaurantContext'
import MyRestaurant from './AllOfRestaurant/MyRestaurant'
import AddRestaurant from './AllOfRestaurant/AddRestaurant';
import AuthLogin from './components/AuthLogin'
import AuthDashBoard from './components/AuthDashBoard'

function App() {
  return (
      
      <RestaurantProvider>
      <AuthContextProvider>
       <Routes>
         <Route element={<AuthLogin/>}>
           
           <Route path='/login' element={<Login />}/>
           <Route path='/register' element={<Register />}/>
          </Route>
          <Route path ='/' element ={<AuthDashBoard/>}>
              <Route path='/' element={<Navigate to="/dashboard" />} />
              <Route path='/dashboard' element={<Home />}/>
              <Route path='/restaurant' element={<MyRestaurant />}/>
              <Route path='/create' element={<AddRestaurant/>}/>
          </Route>

       </Routes>
      </AuthContextProvider>
      </RestaurantProvider>
    
  )
}

export default App;
