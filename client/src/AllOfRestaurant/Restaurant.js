import React from 'react'

const Restaurant = ({id,name,description,image}) => {
  
  
  return (
    
    <div className= 'm-7 shadow-red-600' >
      <img className="object-scale-down rounded-lg h-48 w-96 transform transition duration-500 hover:scale-110" src={image} alt=""/>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">
         
        </p>
      </div>
    <div className="grid grid-cols-1 px-6 pt-4 pb-2">
      
      </div>
      </div>
  )
}

export default Restaurant