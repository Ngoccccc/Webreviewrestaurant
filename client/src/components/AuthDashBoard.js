import React from 'react'
import {Outlet} from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const AuthDashBoard = () => {
  
    
        const Navigate = useNavigate()
    
        const token = localStorage.getItem("token");
        if (token === null) {
            return <Navigate to="/login" />;
        }
        return <Outlet/>
}
export default AuthDashBoard
