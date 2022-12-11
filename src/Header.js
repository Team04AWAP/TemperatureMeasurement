import { react } from '@babel/types';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import{ useState, useState} from react;
import { useNavigate} from "react-router-dom";

const Header=(props) => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">ClimateApp</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <Link to = "/" className="nav-link" href="#">Home</Link>
      </li>
      <li className="nav-item">
      <Link to = "/Signup" className="nav-link">Signup</Link>
      </li>
      <li className="nav-item">
      <Link to = "/login" className="nav-link">Login</Link>
      </li>
      
    </ul>
  </div>
</nav>
    )
}

export default Header;

