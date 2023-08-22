import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


function PostList() {
    const [data, setData] = useState([]);
    const { page_id ,page_name } = useParams();
    const api='http://127.0.0.1:5000/posts/' + page_id;
    useEffect(() => {
      
      axios.get(api)
        .then(response => {
          setData(response.data);
          
        })
        
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []); 
    return (
        <html className='bg-gray-400'>
             <h1 className=" fixed top-10 w-full   py-4   flex  justify-center text-white text-2xl font-bold" >{page_name}</h1>
        <div className='relative flex top-50 justify-center items-center h-screen '>
       
    <table className="border-collapse border border-gray-400">
      <thead>
        <tr className='bg-slate-700 text-white'>
          <th className=" px-4 py-2">post id</th>
          <th className=" px-4 py-2">post time </th>
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr className=' border-2 border-gray-800  bg-gray-600 text-white'>
            <td className=" px-4 py-2">{item[0]}</td>
            <td className=" px-4 py-2">{item[1]}</td>
            <Link to={`/page/${page_id}/${page_name}/comments/post/${item[0]}`}>
            <td className="hover:border-gray-500 hover:border-solid hover:bg-gray-200 hover:text-gray-500 group w-full flex flex-col items-center justify-center rounded-md border-2  border-slate-300  px-4 py-2">comment </td>
            </Link>
            <Link to={`/page/${page_id}/${page_name}/reactions/post/${item[0]}`}>
            <td className="hover:border-gray-500 hover:border-solid hover:bg-gray-200 hover:text-gray-500 group w-full flex flex-col items-center justify-center rounded-md border-2  border-slate-300  px-4 py-2">reaction</td>
            </Link>
          </tr>
        ))}
      </tbody>
    </table>
   
  </div>
  <Link to={`/`}>
            
            <button  className= "fixed top-0 right-0 px-10 py-4  bg-gray-500 text-white font-bold hover:border-gray-500 hover:border-solid hover:bg-gray-200 hover:text-gray-500    rounded-md border-2  border-slate-300 text-sm  text-slate-900 font-medium">
                BACK
            </button>
        </Link>
  
  </html>
);
    
  }
export default PostList;
