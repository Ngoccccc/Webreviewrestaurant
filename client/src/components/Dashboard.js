import React from 'react'
import { Link} from 'react-router-dom'
import logoutIcon from '../views/logout.svg'



const Dashboard = () => {
  
  return (
    
    <nav className="bg-container flex justify-around mx-auto h-14 bg-gradient-to-r from-sky-500 to-indigo-500">
    <div className="flex items-left">
    <h1 className="text-3xl text-cyan-100">Review Restaurant app</h1>
      
    </div>
      
      <div className="text-yellow-50 items-center mr hidden space-x-8 lg:flex">
        <Link to="/dashboard">Home</Link>
        <Link to="/restaurant">My Restaurant</Link>
        <Link to="/create">Create New Restaurant</Link>
        <Link to="/login">
        <button variant='secondary'>
                        <img
							src={logoutIcon}
							alt='logoutIcon'
							width='32'
							height='32'
							className='mr-2'
						/>Logout</button></Link>
      </div>
  
  
    </nav>
  )
}

export default Dashboard