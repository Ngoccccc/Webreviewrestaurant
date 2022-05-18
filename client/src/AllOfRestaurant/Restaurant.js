import React from 'react'
import { useContext } from 'react'
import { RestaurantContext } from '../contexts/RestaurantContext'

const Restaurant = ({id,name,description,image}) => {
  
  
  return (
    <div className="m-10 max-w-sm rounded overflow-hidden shadow-lg">
      <img className="object-fill h-48 w-96 ..." src="https://allimages.sgp1.digitaloceanspaces.com/tipeduvn/2022/02/1643790764_214_50-Anh-Meo-Cute-Ngau-Hinh-Avatar-Meo-De-Thuong.jpg" alt=""/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
          {description}
        </p>
      </div>
    <div className="flex flex-row px-6 pt-4 pb-2">
      <button className=" mx-6 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">Show More</button>
      </div>
    </div>
  )
}

export default Restaurant