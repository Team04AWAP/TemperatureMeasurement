import { useEffect, useState } from 'react';
import axios from 'axios';
import MixChartGraph from './MixChart';
import { Link } from 'react-router-dom';

const URL = 'http://localhost:3001/v1data'


const Page =()=>{

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

          return(
              <div>
                  <h1> Visualizations:(8-10)</h1> 
        
            <MixChartGraph data1 = {annualData} data2 = {monthlyData} data3 = {AnnualNorth} data4 = {MonthNorth} data5 = {AnnualSouth} data6 ={MonthSouth}  data7 = {TwoThousand} />
          <a href = "https://www.metoffice.gov.uk/hadobs/hadcrut5/"><button>Go for data description and dataset</button> </a>
          <br>
          </br>
          <br>
          </br>
          <Link to = "/"><button>Go for Previous visualizations</button> </Link>
          </div>
    )
}
export default Page;