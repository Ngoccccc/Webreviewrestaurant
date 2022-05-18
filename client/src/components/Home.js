import React from 'react'
import {useEffect, useContext} from 'react'
import { RestaurantContext } from '../contexts/RestaurantContext'
import Dashboard from './Dashboard'
import Restaurant from '../AllOfRestaurant/Restaurant'

const Home = () => {
    const {restaurant, getRestaurants} = useContext(RestaurantContext)
    useEffect(()=>getRestaurants ,[])

  
  return (
    <>
        <Dashboard/>
        <div className="flex flex-wrap">
        {
            restaurant && restaurant.map((res,idx) => {
                
                return(
                   
                     <Restaurant id={idx}
                        image={require(`../uploads/images/${res.res_image}`)}
                        name={res.res_name}
                        description={res.res_description}/>
                    
                )
            })
        }
        </div>
    
    </>
  )


}

export default Home