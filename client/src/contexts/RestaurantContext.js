import {createContext,useReducer,useState, useEffect} from 'react'
import axios from 'axios'
import { apiUrl, } from './constants'



export const RestaurantContext = createContext()

const RestaurantProvider = ({children})=>{
    const [restaurant,setRestaurant] = useState([])


    const getRestaurants = async () => {
        try{
            const response = await axios.get(`${apiUrl}/restaurant/index`);
                if (response.status === 200) {
                    console.log(response.data.nickname);
                    setRestaurant(response.data.restaurants);
                } else alert(response.data);
        }catch(e){
            alert(e.message)
        }
    }

    const getMyRestaurants = async () => {
        try{
            const response = await axios.get(`${apiUrl}/restaurant/my-index/${localStorage.getItem("token")}`);
                if (response.status === 200) {
                    console.log(response.data.nickname);
                    setRestaurant(response.data.restaurants);
                } else alert(response.data);
        }catch(e){
            alert(e.message)
        }
    }

    const addRestaurant = async ResForm =>{
        try{
            const response = await axios.post(`${apiUrl}/restaurant/store`,ResForm)
            // console.log(response.status)
            
            
        } catch(error){
            if(error.response) return error.response.data
            else return {success: false, message: error.message}

        }
    }
    
   

    const RestaurantContextData ={
        getRestaurants,
        restaurant, 
        getMyRestaurants,
        addRestaurant
    }

    return(
        <RestaurantContext.Provider value = {RestaurantContextData}>
            {children}
        </RestaurantContext.Provider>
    )
}

export default RestaurantProvider