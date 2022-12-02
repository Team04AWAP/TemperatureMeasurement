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
import Co2MonthGraphdemo from './Co2graphv3';
import VostokIceCore from './VostokIce';
import IceCoreKGraph from './IceCore800K';
import TwoThosandGraph from './TwoThosandYears';
import Header from './Header';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';

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
  const [co2Month, setco2Month] = useState([])
  const [co2Annual, setco2Annual] = useState([])
  const [iceCoreDe, seticeCoreDe] = useState([])
  const [iceCoreDe2, seticeCoreDe2] = useState([])
  const [iceCoreDss, seticeCoreDss] = useState([])
  const [vostokIce, setvostokIce] = useState([])
  const [IceCoreYears, setIceCoreyears] = useState([])
 
  
  

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
      setco2Month(response.data.co2Month)
      setco2Annual(response.data.co2Annual)
      seticeCoreDe(response.data.iceCoreDe)
      seticeCoreDe2(response.data.iceCoreDe2)
      seticeCoreDss(response.data.iceCoreDss)
      setvostokIce(response.data.vostokIce)
      setIceCoreyears(response.data.IceCoreYears)
      
           
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
          <Route path="/signup" element={<Signup />}/>
        </Routes>

        <br></br>
      <h1> Visualizations:</h1>
      
      {/* <ul>
        {annualData.map(annualData => (

          <li key = {annualData}>{annualData.Time}, {annualData.Temparature}</li>
        ))}
      </ul> */}
      <MixChartGraph data1 = {annualData} data2 = {monthlyData} data3 = {AnnualNorth} data4 = {MonthNorth} data5 = {AnnualSouth} data6 ={MonthSouth}  data7 = {TwoThousand} />
     
     <Co2MonthGraphdemo co2data1 ={co2Month} co2data2 ={co2Annual} co2data3 = {iceCoreDe} co2data4 = {iceCoreDe2} co2data5 = {iceCoreDss}/>
     
     <VostokIceCore vostok = {vostokIce} />
     <IceCoreKGraph iceCoreK = {IceCoreYears} />
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
