import { useEffect, useState } from 'react';
import axios from 'axios';
import DoughnutChartGraph from './DoughnutChart';
import { Link } from 'react-router-dom';


const URL = 'http://localhost:3001/v1data'


const Page =()=>{

    const [Doughnut, setDoughtnut] = useState([])
    //const [Doughtnut2, setDoughtnut2] = useState([])
    

    useEffect (() => {
        axios.get(URL)
        .then((response) => {
          debugger
          setDoughtnut(response.data.Doughnut)
          //setDoughtnut2(response.data.Doughtnut2)
          
        }).catch (error => {
            alert(error.response.data.error)
          })
        }, [])

          return(
              <div>
                  <h1> Visualizations:(8-10)</h1> 
                  <DoughnutChartGraph v9data1 = {Doughnut} /> 
          <br>
          </br>
          <br>
          </br>
          <Link to = "/"><button>Go for Previous visualizations</button> </Link>
          </div>
    )
}
export default Page;