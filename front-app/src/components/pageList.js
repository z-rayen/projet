import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';

function PageList() {
  const [data, setData] = useState([]);

 
  useEffect(() => {
    
    axios.get('http://127.0.0.1:5000/pages')
      .then(response => {
        setData(response.data);
        console.log(data)
      })
      
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []); 
  return (
    
    <section>
      
          <h1 className=" fixed top-10 w-full   py-4   flex  justify-center text-white text-2xl font-bold">PAGES LIST </h1>
       
      <ul className=" bg-cover bg-gray-600 p-4 sm:px-100 sm:pt-10 sm:pb-6 lg:p-6 xl:px- xl:pt-6 xl:pb-8 grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-4 text-sm leading-6">
        {data.map(item => (
          <li className="flex">
            <Link to={`/pages/${item[1]}/${item[0]}`}   className="bg-gray-500 text-white hover:border-gray-500 hover:border-solid hover:bg-gray-200 hover:text-gray-500 group w-full flex flex-col items-center justify-center rounded-md border-2  border-slate-300 text-sm leading-6 text-slate-900 font-medium py-2">
              <dl className="grid sm:block lg:grid xl:block grid-cols-3 grid-rows-1 ">
                <div>
                  <dt className="sr-only">id</dt>
                  <dd className="group-hover:text-gray-500">
                  page _id : {item[0]}
                  </dd>
                </div>
                <div>
                  <dt className="sr-only">name</dt>
                  <dd className="group-hover:text-gray-500">page name :{item[1]}</dd>
                </div>
                
              </dl>
              </Link >
          </li>
        ))}
        <li className="flex">
          <a href="/add" className="bg-gray-500 text-white hover:border-gray-500 hover:border-solid hover:bg-gray-200 hover:text-gray-500 group w-full flex flex-col items-center justify-center rounded-md border-2  border-slate-300 text-sm leading-6 text-slate-900 border-dashed font-medium py-2">
            <svg className="group-hover:text-gray-500 mb-1 text-slate-" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            New page
          </a>
        </li>
      </ul>
    </section>
  );
}



export default PageList;
