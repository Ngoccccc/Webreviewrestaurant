import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useState, useContext} from 'react'
import { AuthContext } from '../contexts/AuthContext'

const Login = () => {

    //context
    const {loginUser} =useContext(AuthContext)

    //Router 
    const navigate = useNavigate()

    const [loginForm,setLoginForm] = useState({
        username: '',
        password: '',
    })
    const {username, password} = loginForm
    const onChangeLoginForm = event => setLoginForm({...loginForm, [event.target.name]:event.target.value})

    const login = async event => {
        event.preventDefault()

        try {
          const loginData = await loginUser(loginForm)
          console.log(loginData.status)
        if(loginData.status==200) {
            navigate('/dashboard')
        } else {

        }  

        }
        catch (error) {console.log(error)}
        
    }
    
    return (
        <div className='h-screen bg-bg-imagecustom flex bg-gray-bg1 '>
            <div className='w-full max-w-md m-auto bg-white rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Please Log in to start
                </h1>

                <form >
                    <div>
                        <label htmlFor='text'>Username</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='text'
                            placeholder='Username'
                            name='username'
                            value={username}
                            onChange={onChangeLoginForm}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input
                            type='password'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='password'
                            placeholder='Your Password'
                            name='password'
                            value={password}
                            onChange={onChangeLoginForm}

                        />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        <button
                            className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                            onClick={login}
                        >
                            Login
                        </button>


                    </div>
                    <h1 className="font-semibold text-center py-2 px-4">Don't Have An Accounts?
                        <Link to='/register'>
                            <button className="bg-transparent ml-5 hover:bg-green-500 font-semibold hover:text-white py-0.5 px-1 border border-blue-500 hover:border-transparent rounded" >Register</button>
                        </Link>
                    </h1>
                </form>
            </div>
        </div>
    );
}

export default Login