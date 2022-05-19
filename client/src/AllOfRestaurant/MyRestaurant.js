import React from 'react'
import {useEffect, useContext} from 'react'
import { RestaurantContext } from '../contexts/RestaurantContext'
import Dashboard from '../components/Dashboard'
import ShowMore from './ShowMore'
import Restaurant from './Restaurant'
import Edit from './Edit'
import Delete from './Delete'

const MyRestaurant = () => {
    const {restaurant, getMyRestaurants} = useContext(RestaurantContext)
    useEffect(()=>getMyRestaurants ,[])


  return (
    <>
        <Dashboard/>
        <div className="h-screen bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 grid grid-cols-3 gap-8">
        {
            restaurant && restaurant.map((res,idx) => {
                
                return(
                  <div className="rounded-2xl object-cover h-fit border-2 m-10 max-w-sm overflow-hidden shadow-lg">
                  <Restaurant id={idx}
                  image={require(`../uploads/images/${res.res_image}`)}
                  name={res.res_name}
                  />
                  
                  <div className='text-center'>
                    
                    <ShowMore
                    image={require(`../uploads/images/${res.res_image}`)}
                    name ={res.res_name}
                    description={res.res_description}
                    />
                    <Edit res={res}/>
                    <Delete res={res}/>
                  </div>
                  </div>
                )
            })
        }
        </div>
    
    </>
  )


}

export default MyRestaurant