import axios from 'axios';
import React, { useState, useEffect } from 'react';

function PostNember({ page_id }) {

    const [long,setLong] = useState([]);
    const api='http://127.0.0.1:5000/posts/' + page_id;
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