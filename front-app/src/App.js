import React from 'react';

import {BrowserRouter ,Route,Routes} from 'react-router-dom';
import PostList from "./components/PostList";

import ReactionList  from './components/reactionList';
import ComentList from './components/comentList';
import PageList from './components/pageList';
import AddPageForm from './components/form';
export default function App() {
  return (
   
    
  <BrowserRouter>
    <Routes>
    <Route path ="/" exact element ={<PageList />} />
    <Route path ="/add"   element ={<AddPageForm />} />
    <Route path ='/pages/:page_name/:page_id' exact element ={<PostList />} />
    <Route path ='/page/:page_id/:page_name/comments/post/:post_id' exact element ={<ComentList />} />
    <Route path ='/page/:page_id/:page_name/reactions/post/:post_id' exact element ={<ReactionList />} />
  </Routes>


</BrowserRouter> 

  );
}



