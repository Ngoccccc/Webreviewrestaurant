import React from 'react'
import { Link, useNavigate} from 'react-router-dom'
import logoutIcon from '../views/logout.svg'




const Dashboard = () => {
  
  const navigate = useNavigate()
  const Logout = () => {
  
  localStorage.removeItem('token');
  navigate('/login')

}
  return (
    
    <nav className="bg-container flex justify-around mx-auto h-14 bg-gradient-to-r from-sky-500 to-indigo-500">
    <div className="flex items-left">
    <h1 className="text-3xl text-cyan-100">Review Restaurant app</h1>
      
    </div>
      
      <nav className="text-yellow-50 items-center mr hidden space-x-8 lg:flex">
        <Link to="/dashboard">
          <div className = 'text-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Home</div>
        </Link>
        <Link to="/restaurant">
          <div className = 'text-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>My Restaurant</div>
        </Link>
        <Link to="/create">
          <div className ='text-white hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>Create New Restaurant</div>
        </Link>
        
        <div className = 'text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-1.9 text-center mr-2 mb-2'>
        <button onClick={Logout} variant='secondary'>
                        <img
							src={logoutIcon}
							alt='logoutIcon'
							width='32'
							height='32'
							className='mr-2'
						/>Logout</button></div>
      </nav>
  
  
    </nav>
  )
}

export default Dashboard