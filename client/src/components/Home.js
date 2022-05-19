import React from 'react'
import {useEffect, useContext} from 'react'
import { RestaurantContext } from '../contexts/RestaurantContext'
import Dashboard from './Dashboard'
import Restaurant from '../AllOfRestaurant/Restaurant'
import ShowMore from '../AllOfRestaurant/ShowMore'

const Home = () => {
    const {restaurant, getRestaurants} = useContext(RestaurantContext)
    useEffect(()=>getRestaurants ,[])

    
  return (
    <>
        <Dashboard/>
        <div className="h-screen bg-bg-image2 bg-cover bg-fixed grid grid-cols-3 gap-8">
        {
            restaurant && restaurant.map((res,idx) => {
                
                return(
                  <div className="rounded-2xl shadow-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 object-cover h-fit m-10 max-w-sm overflow-hidden shadow-lg">
                     <div className="">
                     <Restaurant id={idx}
                        image={require(`../uploads/images/${res.res_image}`)}
                        name={res.res_name}
                        description={res.res_description}/>
                      </div>
                      <div className="flex justify-center items-center">
                      <ShowMore
                        image={require(`../uploads/images/${res.res_image}`)}
                        name ={res.res_name}
                        description={res.res_description}
                      />
                      </div>

                  </div>
                )
            })
        }
        </div>
    
    </>
  )


}

export default Home