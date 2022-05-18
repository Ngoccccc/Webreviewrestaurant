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
        <div className="grid grid-cols-3 gap-8">
        {
            restaurant && restaurant.map((res,idx) => {
                
                return(
                  <div className="object-cover m-10 max-w-sm rounded overflow-hidden shadow-lg">
                  <Restaurant id={idx}
                  image={require(`../uploads/images/${res.res_image}`)}
                  name={res.res_name}
                  description={res.res_description}/>
                  <ShowMore
                  image={require(`../uploads/images/${res.res_image}`)}
                  name ={res.res_name}
                  description={res.res_description}
                  />
                  <Edit res={res}/>
                  <Delete res={res}/>
                  </div>
                )
            })
        }
        </div>
    
    </>
  )


}

export default MyRestaurant