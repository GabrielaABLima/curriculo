import React from 'react'
import Home from './Home'
import {Route, Routes, useLocation} from 'react-router-dom';

function Pages() {

  const location = useLocation();
  return (
        <Routes location={location} key={location.path}>
            <Route path="/" element={<Home/>} />  
        </Routes>
    
  );
}

export default Pages