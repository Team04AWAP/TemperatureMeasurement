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

const URL = 'http://localhost:3001/v1data'


function App() {
  const [annualData, setannualData] = useState([])
  const [monthlyData, setmonthlyData] = useState([])
  const [AnnualNorth, setAnnualNorth] = useState([])
  const [MonthNorth, setMonthNorth] = useState([])
  const [AnnualSouth, setAnnualSouth] = useState([])
  const [MonthSouth, setMonthSouth] = useState([])
 
  
  

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
      
           
    }).catch (error => {
      alert(error.response.data.error)
    })
  }, [])


  return (
    <div>
      <h3> Temperature Fact</h3>
      
      {/* <ul>
        {annualData.map(annualData => (

          <li key = {annualData}>{annualData.Time}, {annualData.Temparature}</li>
        ))}
      </ul> */}
      <MixChartGraph data1 = {annualData} data2 = {monthlyData} data3 = {AnnualNorth} data4 = {MonthNorth} data5 = {AnnualSouth} data6 ={MonthSouth} />
     
      <LinearLineGraphDemo myData = {annualData} />
      <MonthlyLineGraphDemo ownData = {monthlyData} />
      <AnnualNorthGraph defineData = {AnnualNorth} />
      <MonthNorthGraph defaultData = {MonthNorth} />
      <AnnualSouthGraph southData = {AnnualSouth} />
      <MonthSouthGraph mineData = {MonthSouth} />
     
    </div>
    
  );
}

export default App;
