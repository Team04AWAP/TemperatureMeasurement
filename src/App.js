import './App.css';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

import {BrowserRouter, Routes, Route} from 'react-router-dom';





function App() {
  




  return (
     <BrowserRouter>

       <div className = "container">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="login" element={<Login />}/>
          <Route path="signup" element={<Signup />}/>
        </Routes>

        <br></br>
  
     
    </div>
    </BrowserRouter>
    
  );
}

export default App;
