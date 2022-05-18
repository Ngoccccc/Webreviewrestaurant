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
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={deleteData}
      >
        Delete
      </button>
    </> 
  );
}