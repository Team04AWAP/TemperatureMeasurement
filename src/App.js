import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import LinearLineGraphDemo from './LinearLineGraph';
import MonthlyLineGraphDemo from './MonthlyLineGraph';
const URL = 'http://localhost:3001/'


function App() {
  const [annualData, setannualData] = useState([])
  const [MonthlyData, setMonthlyData] = useState([])

  useEffect (() => {
    axios.get(URL)
    .then((response) => {
      setannualData(response.data)
      setMonthlyData(response.data)
    }).catch (error => {
      alert(error.response.data.error)
    })
  }, [])

debugger
  return (
    <div>
      <h3> Temperature Fact</h3>
      
      {/* <ul>
        {annualData.map(annualData => (

          <li key = {annualData}>{annualData.Time}, {annualData.Temparature}</li>
        ))}
      </ul> */}
     
      <LinearLineGraphDemo myData = {annualData} />
      <MonthlyLineGraphDemo ownData = {MonthlyData} />
    </div>
    
  );
}

export default App;
