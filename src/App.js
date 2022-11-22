import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LinearLineGraphDemo from './LinearLineGraph';
import MonthlyLineGraphDemo from './MonthlyLineGraph';
const URL = 'http://localhost:3001/v1data'


function App() {
  const [annualData, setannualData] = useState([])
  const [monthlyData, setmonthlyData] = useState([])

  useEffect (() => {
    axios.get(URL)
    .then((response) => {
      debugger
      setannualData(response.data.annualData)
      setmonthlyData(response.data.monthlyData)
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
     
      <LinearLineGraphDemo myData = {annualData} />
      <MonthlyLineGraphDemo ownData = {monthlyData} />
    </div>
    
  );
}

export default App;
