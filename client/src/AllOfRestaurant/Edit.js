import React from 'react'
import {useState} from 'react'
import { apiUrl } from '../contexts/constants';
import axios from 'axios'


export default function Edit(dataEdit) {
  const [showModal, setShowModal] = React.useState(false);


  const [data,setData] = useState({
      res_name : dataEdit.res.res_name,
      res_description : dataEdit.res.res_description,
      res_image : dataEdit.res.res_image
  })

  const onChangeAdd = event => setData({...data, [event.target.name]:event.target.value})
  console.log(data)

  const [image,setImage] = useState('')
  console.log(data.res_image)

  const updateData = async (event) => {
      event.preventDefault()
      const fData = new FormData();
      fData.append('name',data.res_name)
      fData.append('description',data.res_description)
      fData.append('image',image)

      try {
          const response = await axios.post(`${apiUrl}/restaurant/update/${dataEdit.res.id}/${localStorage.getItem('token')}`, fData)
          if(response.status === 200) {
              setShowModal(false)
          }
      }
      catch (e) {
          console.log(e)
      }
  }

  return (
    <>
      <button
        className="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:focus:ring-yellow-900"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div
            className=" flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="w-500px my-6 mx-auto min-w-[400px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="items-start justify-between p-5 rounded-t">
                  <h3 className="text-3xl text-center font-semibold">
                    EDIT TAB
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className = 'm-4'>
                        <label className='pl-3 text-2xl block text-gray-700 font-bold mb-2' htmlFor='email'>Restaurant's Name</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='text'
                            placeholder='Name'
                            name = 'res_name'
                            
                            onChange={(event) => setData({...data, res_name: event.target.value})}
                        />
                    </div>
                    <div className = 'm-4'>
                        <label className='pl-3 text-2xl block text-gray-700 font-bold'>Description</label>
                        <input
                            
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='description'
                            placeholder='Description'
                            name='res_description'
                            
                            onChange={(event) => setData({...data, res_description: event.target.value})}
                        />
                    </div>
                    <div className="px-4">
                        <p className="text-2xl font-medium">Image</p>
                        
                        
                        <input id="img" className="py-5 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" type="file" name="image" onChange={ (e) => setImage(e.target.files[0]) } />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        
                        
                    </div>
                {/*footer*/}
                <div className="flex items-center justify-end pr-6">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    
                    className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                    type="submit"
                    onClick={updateData}
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}