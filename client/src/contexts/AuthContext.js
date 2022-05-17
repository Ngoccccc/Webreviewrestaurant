import {createContext,useReducer} from 'react'
import {authReducer} from '../reducers/authReducer'
import axios from 'axios'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constants'


export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [authState, dispatch] =useReducer(authReducer,{
        authLoading: true,
        isAuthenticated: false,
        user: null
    })

    //Login
    const loginUser = async userForm =>{
        try{
            const response = await axios.post(`${apiUrl}/login`,userForm)
            console.log(response.status)
            
            //localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)
             
            return response
        } catch(error){
            if(error.response) return error.response.data
            else return {success: false, message: error.message}

        }

    }

    //Register
       const registerUser = async userForm =>{
        try{
            const response = await axios.post(`${apiUrl}/register`,userForm)
            // console.log(response.status)
            
            //localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)
             
            return response
        } catch(error){
            if(error.response) return error.response.data
            else return {success: false, message: error.message}

        }

    }
    //  Context data
    const authContextData = {
        loginUser,
        registerUser
    }
    
    // Return Provider
    return (
        <AuthContext.Provider value = {authContextData}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider