import {createContext,useReducer, useEffect} from 'react'
import {authReducer} from '../reducers/authReducer'
import axios from 'axios'
import { apiUrl, LOCAL_STORAGE_TOKEN_NAME } from './constants'
import setAuthToken from '../utils/setAuthToken'

export const AuthContext = createContext()

const AuthContextProvider = ({children}) => {
    const [authState, dispatch] =useReducer(authReducer,{
        authLoading: true,
        isAuthenticated: false,
        user: null
    })
    
    //Authenticate user
    // const loadUser = async () =>{
    //     if(localStorage.getItem('token')){
    //         setAuthToken(localStorage.getItem('token'))
    //     }

    //     try {
    //         const response = await axios.get(`${apiUrl}/auth`)
    //         if(response.status){
    //             dispatch({type: 'SET_AUTH', payload: {isAuthenticated: true, user: response.status}})
    //         }
    //     }
    //     catch(error){
    //         localStorage.removeItem('token')
    //         setAuthToken(null)
    //         dispatch({type: 'SET_AUTH', payload: {isAuthenticated: false, user: null}})
    //     }
    // }

    // useEffect(() => loadUser(),[])

    //Login
    const loginUser = async userForm =>{
        try{
            const response = await axios.post(`${apiUrl}/login`,userForm)
            console.log(response.status)
            
            //localStorage.setItem(LOCAL_STORAGE_TOKEN_NAME, response.data.accessToken)
            localStorage.setItem('token', response.data.token)
             
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
            
            
        } catch(error){
            if(error.response) return error.response.data
            else return {success: false, message: error.message}

        }
    }

    //Logout

    const logoutUser = () => {
         
    }

    //  Context data
    const authContextData = {
        loginUser,
        registerUser,
        authState
    }
    
    // Return Provider
    return (
        <AuthContext.Provider value = {authContextData}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContextProvider