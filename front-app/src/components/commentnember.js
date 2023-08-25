import axios from 'axios';
import React, { useState, useEffect } from 'react';
function ProgressCell({ numerator, denominator }) {
    const progressPercentage = ((numerator ) / (numerator + denominator))*100;
  
    const containerStyles = {
      width: '200px',
      height: '0.5rem',
      background: '#E2E8F0',
      overflow: 'hidden',
      borderRadius: '9999px',
    };
  
    const innerStyles = {
      width: `${progressPercentage}%`,
      height: '1.5rem',
      background: '#3B82F6',
    };
    return (
        <td className="px-0 py-3 text-sm whitespace-nowrap">
          <div style={containerStyles}>
            <div style={innerStyles}></div>
          </div>
        </td>
      );
}
function CommentNember({ post_id }) {
   
    const [longc,setLongc] = useState([]);
    const [longr,setLongr] = useState([]);
    const apic='http://127.0.0.1:5000/posts/comments/' + post_id;
    const apir='http://127.0.0.1:5000/posts/reactions/' + post_id;
    useEffect(() => {
      
      axios.get(apic)
        .then(response => {
          
          setLongc(response.data.length);
        })
        
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []); 
    useEffect(() => {
      
      axios.get(apir)
        .then(response => {
          
          setLongr(response.data.length);
        })
        
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);

    return(
        
        <td>
        <ProgressCell numerator={longc} denominator={longr} />
      
    
        <p class="text-sm font-normal text-gray-600 dark:text-gray-400">{longc} comment</p>
       </td>
     
      
    )}
    export default CommentNember;