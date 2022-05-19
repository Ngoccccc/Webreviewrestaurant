import React from 'react'
import { useContext, useState } from 'react'
import {RestaurantContext} from '../contexts/RestaurantContext'
import axios from 'axios'
import { apiUrl} from '../contexts/constants'
import {useNavigate} from "react-router-dom"
import Dashboard from '../components/Dashboard'

const AddRestaurant = () => {

    const {addRestaurant} = useContext(RestaurantContext)
    const navigate = useNavigate()
    
    const [newRestaurant,setNewRestaurant] = useState({
        name: '',
        description: '',
    })

    const [Image,setImage] = useState('')
    const {name, description} = newRestaurant
    const onChangeAdd = event => setNewRestaurant({...newRestaurant, [event.target.name]:event.target.value})
    
    const addRes = async event =>{
        event.preventDefault()

        const fData = new FormData();
        fData.append('name', newRestaurant.name);
        fData.append('description', newRestaurant.description);
        fData.append('_token', localStorage.getItem("token"));
        fData.append('image', Image);

        console.log(typeof fData, fData);
        try{
            const response = await axios.post(`${apiUrl}/restaurant/store`, fData);
            if(response.status === 200){
                navigate('/restaurant');
            }
        }
        catch(err){
            console.log(err);
        }

    }
  
    return (
        <>
        <Dashboard/>
        <div className='h-screen flex bg-gray-bg1 bg-gradient-to-r from-purple-500 to-pink-500 '>
            <div className='w-full max-w-md m-auto bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 rounded-lg border border-primaryBorder shadow-default py-10 px-16'>
                <h1 className='text-2xl font-medium text-primary mt-4 mb-12 text-center'>
                    Add New Restaurant
                </h1>
                    <div>
                        <label htmlFor='email'>Restaurant's Name</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='text'
                            placeholder='Name'
                            name = 'name'
                            value={name}
                            onChange={onChangeAdd}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Description</label>
                        <input
                            
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='description'
                            placeholder='Description'
                            name='description'
                            value={description}
                            onChange={onChangeAdd}
                        />
                    </div>
                    <div>
                        <p className="text-2xl font-medium">Image</p>
                        <div className = 'mt-5'>
                        <input id="img" className="file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:font-semibold file:bg-blue-50 file:text-blue-700" type="file" name="image" onChange={ (e) => setImage(e.target.files[0]) } />
                        </div>
                    </div>

                    <div className='flex justify-center m-5 items-center mt-6'>
                        <button
                            className="bg-transparent hover:bg-yellow-300 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded"
                        onClick={addRes}
                        >
                            Create
                        </button>
                        
                        
                    </div>
                
            </div>
        </div>
        </>
  )
}

export default AddRestaurant