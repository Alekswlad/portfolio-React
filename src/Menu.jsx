import { Route, Routes, Link } from "react-router-dom";
import React from "react";
import {FaHouseUser, FaMale, FaBriefcase} from 'react-icons/fa';

import Home from "./Pages/Home";
import About from "./Pages/About"
import Portfolio from "./Pages/Portfolio"

function Menu() {
    return (
        <>           
        <nav className="controls">
              <Link to="/" className="control"><FaHouseUser className="fas fa-user"/></Link>
              <Link to="/about" className="control">< FaMale className="fas fa-user"/></Link>
              <Link to="/portfolio" className="control">< FaBriefcase className="fas fa-user"/></Link>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>     
        </>
    )
 }
export default Menu;