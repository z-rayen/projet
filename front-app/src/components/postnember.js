import axios from 'axios';
import React, { useState, useEffect } from 'react';

function PostNember({ page_id }) {

    const [long,setLong] = useState([]);
    const api='https://flask-app-7brx.onrender.com/posts/' + page_id;
    useEffect(() => {
      
      axios.get(api)
        .then(response => {
       
          setLong(response.data.length);
        })
        
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []); 
    return(
        
            <div className="inline  px-3 py-2 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                {long} posts
            </div>
      
    )}
    export default PostNember;