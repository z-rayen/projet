import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';


function ReactionList() {
    const [data, setData] = useState([]);
    const { page_id ,page_name,post_id } = useParams();
    const api='http://127.0.0.1:5000/posts/comments/' + post_id;
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
        <div>
            <h1 className=" fixed top-15 w-full    py-4   flex  justify-center text-white text-2xl font-bold" >comments of post_id :{post_id} </h1>
        <div className=" relative flex justify-center items-center ">
        <div  className=" relative flex justify-center items-center h-screen">
    <table className=" max-h-screen overflow-y-auto border-collapse border border-gray-400 bg-gray-800 p-8 rounded-lg shadow-lg">
      <thead>
        <tr className='bg-slate-700 text-white'>
            <td className="border border-gray-400 px-4 py-2">comment_id</td>
            <td className="border border-gray-400 px-4 py-2">commenter_id</td>
            <td className="border border-gray-400 px-4 py-2">commenter_name</td>
            <td className="border border-gray-400 px-4 py-2">comment_text</td>
            <td className="border border-gray-400 px-4 py-2">comment_time</td>
            
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr className='bg-gray-600 text-white'> 
            <td className="border border-gray-400 px-4 py-2">{item[0]}</td>
            <td className="border border-gray-400 px-4 py-2">{item[1]}</td>
            <td className="border border-gray-400 px-4 py-2">{item[2]}</td>
            <td className="border border-gray-400 px-4 py-2">{item[3]}</td>
            <td className="border border-gray-400 px-4 py-2">{item[4]}</td>
          </tr>
        ))}
          
      </tbody>
    </table>
    </div>
  </div>
  <Link to={`/pages/${page_name}/${page_id}`}>
            
                <button  className="fixed top-0 right-0 px-10 py-4  bg-gray-500 text-white font-bold hover:border-gray-500 hover:border-solid hover:bg-gray-200 hover:text-gray-500    rounded-md border-2  border-slate-300 text-sm  text-slate-900 font-medium">
                    BACK
                </button>
            </Link>
  </div>
  </html>
);
    
  }
export default ReactionList;
