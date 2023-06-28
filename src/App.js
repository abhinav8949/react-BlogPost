import React, {Component} from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css"
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Navbar from './components/layout/Navbar';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import NotFound from './components/pages/NotFound';
import AddBlog from './components/users/AddBlog';
import EditBlog from './components/users/EditBlog';
import BlogDetails from './components/users/BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/addblog' element={<AddBlog/>} />
          <Route exact path="/editblog/:id" element={<EditBlog/>} />
          <Route exact path="/blogdetails/:id" element={<BlogDetails/>} />
          <Route path='*' element={<NotFound/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;