import React from 'react'
import {useState} from 'react'
import { apiUrl } from '../contexts/constants';
import {axios} from 'axios'


export default function Edit(dataEdit) {
  const [showModal, setShowModal] = React.useState(false);


  const [data,setData] = useState({
      res_name : dataEdit.res.res_name,
      res_description : dataEdit.res.res_description,
      res_image : dataEdit.res.res_image,
  })

  const onChangeAdd = event => setData({...data, [event.target.name]:event.target.value})

  const [image,setImage] = useState('')

  const updateData = async (event) => {
      event.preventDefault()
      const fData = new FormData();
      fData.append('name',data.res_name)
      fData.append('description',data.res_description)
      fData.append('image',data.res_image)

      try {
          const response = await axios.post(`${apiUrl}/update/${dataEdit.res.id}/${localStorage.getItem('token')}`, fData)
          if(response.status === 200) {
              setShowModal(false)
          }
      }
      catch (e) {
          alert(e.message)
      }
  }

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Edit
      </button>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    Modal Title
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div>
                        <label htmlFor='email'>Restaurant Name</label>
                        <input
                            type='text'
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='text'
                            placeholder='Name'
                            name = 'name'
                            value={data.res_name}
                            onChange={onChangeAdd}
                        />
                    </div>
                    <div>
                        <label htmlFor='password'>Description</label>
                        <input
                            
                            className={`w-full p-2 text-primary border rounded-md outline-none text-sm transition duration-150 ease-in-out mb-4`}
                            id='description'
                            placeholder='Description'
                            name='description'
                            value={data.res_description}
                            onChange={onChangeAdd}
                        />
                    </div>
                    <div>
                        <p className="text-2xl font-medium">Image</p>
                        <input id="img" className="rounded-lg" type="file" name="image" onChange={ (e) => setImage(e.target.files[0]) } />
                    </div>

                    <div className='flex justify-center items-center mt-6'>
                        
                        
                    </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => {
                                    updateData()
                    }             
                            }
                  >
                    Save Changes
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