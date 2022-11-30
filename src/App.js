import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LinearLineGraphDemo from './LinearLineGraph';
import MonthlyLineGraphDemo from './MonthlyLineGraph';
import AnnualNorthGraph from './AnnualNorth';
import MonthNorthGraph from './MonthNorth';
import AnnualSouthGraph from './AnnualSouth';
import MonthSouthGraph from './MonthSouth';
import MixChartGraph from './MixChart';
import TwoThosandGraph from './TwoThosandYears';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Register from './Register';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

const URL = 'http://localhost:3001/v1data'


function App() {
  const [annualData, setannualData] = useState([])
  const [monthlyData, setmonthlyData] = useState([])
  const [AnnualNorth, setAnnualNorth] = useState([])
  const [MonthNorth, setMonthNorth] = useState([])
  const [AnnualSouth, setAnnualSouth] = useState([])
  const [MonthSouth, setMonthSouth] = useState([])
  const [TwoThousand, setTwoThousand] = useState([])
 
  
  

  useEffect (() => {
    axios.get(URL)
    .then((response) => {
      debugger
      setannualData(response.data.annualData)
      setmonthlyData(response.data.monthlyData)
      setAnnualNorth(response.data.AnnualNorth) 
      setMonthNorth(response.data.MonthNorth) 
      setAnnualSouth(response.data.AnnualSouth)
      setMonthSouth(response.data.MonthSouth)
      setTwoThousand(response.data.TwoThousand)
      
           
    }).catch (error => {
      alert(error.response.data.error)
    })
  }, [])




  return (
      <Router>
    <div className = "container">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
        </Routes>

        <br></br>
      <h3> Global historical surface temperature</h3>
      
      {/* <ul>
        {annualData.map(annualData => (

          <li key = {annualData}>{annualData.Time}, {annualData.Temparature}</li>
        ))}
      </ul> */}
      <MixChartGraph data1 = {annualData} data2 = {monthlyData} data3 = {AnnualNorth} data4 = {MonthNorth} data5 = {AnnualSouth} data6 ={MonthSouth}  data7 = {TwoThousand} />
     
     {/* <LinearLineGraphDemo myData = {annualData} />
      <MonthlyLineGraphDemo ownData = {monthlyData} />
      <AnnualNorthGraph defineData = {AnnualNorth} />
      <MonthNorthGraph defaultData = {MonthNorth} />
      <AnnualSouthGraph southData = {AnnualSouth} />
    <MonthSouthGraph mineData = {MonthSouth} /> 
    <TwoThousandGraph yearData = {TwoThosand} />*/}
     
    </div>
    </Router>
    
  );
}

export default App;
