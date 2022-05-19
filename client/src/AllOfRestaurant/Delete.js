import React from 'react'
import {useState} from 'react'
import { apiUrl } from '../contexts/constants';
import axios from 'axios'


export default function Delete(dataEdit) {
  const deleteData = async (event) => {
      event.preventDefault()
      try {
          const response = await axios.delete(`${apiUrl}/restaurant/delete/${dataEdit.res.id}/${localStorage.getItem('token')}`)
          if(response.status === 200) {
              window.location.reload()
          }
      }
      catch (e) {
          console.log(e)
          console.log(dataEdit.res.id)
      }
  }

  return (
    <>
      <button
        className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
        type="button"
        onClick={deleteData}
      >
        Delete
      </button>
    </> 
  );
}