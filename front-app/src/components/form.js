import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddPageForm() {
  const [page, setPage] = useState({
    name: ''
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPage((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
    const respons = await axios.post('https://flask-app-7brx.onrender.com/add/new_page', 
            page,
        
      )
      
      if (!respons.data.error) {
        
        setErrorMessage(respons.data.message);
      } else {
       
        setErrorMessage(respons.data.message);
      }
     } catch (error) {
        console.error('Error:', error);
      setErrorMessage('An error occurred while adding the page.');
     
      }
  };
 
 
return (
    <html style={{ backgroundColor: 'gray' }}>
    
    <div  className=" relative flex justify-center items-center h-screen">
        <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg">
         <h2 className="text-white text-2xl font-semibold mb-4">ADD NEW PAGE</h2>
        <label className="text-white">
            PAGE NAME : <input
            type = "text"
            name="name"
            className="w-full bg-gray-700 px-3 py-2 rounded-md mb-2 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-blue-300"
            value ={page.name }
            onChange={handleChange} />
        </label>
        <p className='font-bold text-red-800'>{errorMessage}</p>
        <div className="flex justify-between">
            <button type="submit" className="bg-blue-500 text-white px-8 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
            ADD
            </button>
            <Link to="/">
                <button  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                    CANCELE
                </button>
            </Link>
      </div>
        </form>
          
           
    </div>
   
    </html>
);

}
export default AddPageForm;


  