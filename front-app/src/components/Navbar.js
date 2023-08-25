import React from 'react';
import AddPageForm from './form';
import PageList from './pageList';
import {BrowserRouter ,Link,Route,Routes} from 'react-router-dom';
import PostList from "./PostList";

import ReactionList  from './reactionList';
import ComentList from './comentList';

const Navbar = () => {
  return (
  <>
    <BrowserRouter>
      <nav class="fixed top-0 w-full shadow sticky bg-gray-800 py-4 space-x-0">
        <Link to ="/" className='bg-gray-500 text-white font-bold hover:border-gray-500 hover:border-solid hover:bg-gray-200 hover:text-gray-500    rounded-md border-2  border-slate-300 text-sm  text-slate-900 font-medium py-4 px-5'>home page</Link >
        <Link to ="/add"  className='bg-gray-500 text-white font-bold hover:border-gray-500 hover:border-solid hover:bg-gray-200 hover:text-gray-500    rounded-md border-2  border-slate-300 text-sm  text-slate-900 font-medium py-4 px-7'>add page </Link >
      </nav>

        <Routes>
          <Route path ="/" exact element ={<PageList />} />
          <Route path ="/add"   element ={<AddPageForm />} />
          <Route path ='/pages/:page_name/:page_id' exact element ={<PostList />} />
          <Route path ='/page/:page_id/:page_name/comments/post/:post_id' exact element ={<ComentList />} />
          <Route path ='/page/:page_id/:page_name/reactions/post/:post_id' exact element ={<ReactionList />} />
        </Routes>


      </BrowserRouter>
      <footer class=" bg-gray-800 py-4 space-x-0"></footer>
      </>
  );
}

export default Navbar;