import { useEffect, useState } from 'react';
import axios from 'axios';
import MixChartGraph from './MixChart';
import Co2MonthGraphdemo from './Co2graphv3';
import VostokIceCore from './VostokIce';
import IceCoreKGraph from './IceCore800K';
import TwoMillionYearsGraphdemo from './TwoMillionYears';
import { Link } from 'react-router-dom';

const URL = 'http://localhost:3001/v1data'


const Home=()=>{

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
    const [TwoMillionTemperature, setTwoMillionTemperature] = useState([])
    const [TwoMillionCo2, setTwoMillionCo2] = useState([])

 
  
  

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
      setTwoMillionTemperature(response.data.TwoMillionTemperature)
      setTwoMillionCo2(response.data.TwoMillionCo2)
      
      
           
    }).catch (error => {
      alert(error.response.data.error)
    })
  }, [])
    return(
        <div>
            <h1> Visualizations:(1-7)</h1> 
  
      <MixChartGraph data1 = {annualData} data2 = {monthlyData} data3 = {AnnualNorth} data4 = {MonthNorth} data5 = {AnnualSouth} data6 ={MonthSouth}  data7 = {TwoThousand} />
    <br></br>
    <a href = "https://www.metoffice.gov.uk/hadobs/hadcrut5/"><button> Know more about the data mesaurements! </button> </a>
    <br></br>
    <br></br>
    <a href = "https://www.metoffice.gov.uk/hadobs/hadcrut5/data/current/download.html"><button> See the Dataset here!</button> </a>
    <br></br>
      <br></br>
      <div id='Vis2'>

        <h6>Visualisaton 2:</h6>
      

      <p>  The graph of Visualisation 2 represents the Northern Hemisphere’s
    2000-year temperature reconstruction.It is based on the Palaeoclimatological study of 2000 years of temperature. 
 The data used in the graph was reconstructed by “combining low-resolution proxies with tree-ring data, 
 using a wavelet transform technique to achieve timescale-dependent processing of the data.” ( Anders Moberg et al.) 
 It can be observed from the graph data that “high temperatures—similar to those observed in the 
 twentieth century before 1990—occurred around AD 1000 to 1100, and minimum temperatures that are about 0.7 K 
 below the average of 1961–90 occurred around AD 1600.” (Anders Moberg et al.) In V2 graph, represented with 
 brown line graph we get to see the change in the Northern Hemisphere’s mean temperature over the period of 2000 years, 
 where the x-axis of the graph represents the Time period in years and the y-axis of the graph represent the annual mean
  Temperature in Celsius.
</p>

      </div>
   
<br>
    </br>
    <a href = "https://bolin.su.se/data/moberg-2012-nh-1?n=moberg-2005"><button> Know more about the data mesaurements! </button> </a>
    <br>
    </br>
    <br></br>
    <a href = "https://www.nature.com/articles/nature03265"><button> Read more about data mesaurements!</button> </a>
    <br>
    </br>
    <br></br>
    <a href = "https://www.ncei.noaa.gov/pub/data/paleo/contributions_by_author/moberg2005/nhtemp-moberg2005.txt"><button> See the Dataset here!</button> </a>
    <br>
    </br>
    <br></br>
      


     <Co2MonthGraphdemo co2data1 ={co2Month} co2data2 ={co2Annual} co2data3 = {iceCoreDe} co2data4 = {iceCoreDe2} co2data5 = {iceCoreDss}/>
     <br></br>
     <br></br>

     <div id='Vis3'>
      <br></br>
     <h6>Visualisation 3:</h6>
     <p>
      The graph above in Visualisation 3, shows the mean data of monthly and annual 
     atmospheric carbon dioxide concentrations made on Mauna Loa, Hawaii, over a period
      of 65 years. The time measurements started in the year 1958, C. David Keeling of
       the Scripps Institution of Oceanography, and last for over a period of 65 years.
        The x-axis of the graph represents the time, in years, and the y-axis represent 
        the mean atmospheric carbon dioxide concentrations. If, observed closely it can
         be seen from the Monthly CO2 concentrations, represented by blue line, that carbon
          dioxide concentration levels increase during warm months, highest peak being in 
          summer and decrease in colder months. Moreover, it can be observed from the Annual 
          carbon dioxide concentration, represented with red line, shows that CO2 levels has 
          gradually increased in the atmosphere over the period of 65 years. The data collected
           can also be used to reflect on the global atmospheric concentrations.
     </p>
     </div>
     
     <a href = "https://gml.noaa.gov/ccgg/about/co2_measurements.html"><button> Know more about the data mesaurements! </button> </a>
     <br>
    </br>
    <br></br>
    <a href = "https://gml.noaa.gov/ccgg/trends/"><button> See the Dataset here!</button> </a>
    <br>
    </br> <br></br>
    <div id='Vis4'>
      <h6>Visualisaton 4:</h6>
    <p> 
      The graph of Visualisation 4 shows the historical Atmospheric carbon dioxide
      concentrations based on Antarctic ice cores, over a period ~1000 years. The data was recorded
       over the period 1006 A.D.-1978 A.D., from the three ice cores DE08, DE08-02, and DSS, obtained
        at Law Dome, East Antarctica from year 1987 to 1993. The line chart graph displays the three 
        Ice Core dataset, each dataset represented with three different coloured lines, where pink 
        line shows the Ice Core DE08, purple line shows Ice Core DE08-02, and brown line shows Ice Core 
        DSS measurements. DE08, DE08-02, and DSS are the names of the ice sample code from the ice cores.
         In the graph, x-axis represents the time, in years, and y-axis shows the atmospheric carbon dioxide
          concentrations.  It can be observed from the graph CO2 levels were quite low during 1550-1800 A.D.,
           the preindustrial age, probably because of colder global climate, (Etheridge et al. 1996). The Law 
           Dome ice core CO2 data show major growth in atmospheric CO2 levels over the industrial period, as it
            can also be observed from the graph as all three lines show an exponential growth around 1800s. 
            In addition to this, Mauna Loa CO2 atmospheric concentration levels follows the same pattern as 
            the Antarctic ice core CO2 levels.
     </p>
    </div>
     
     <a href = "https://cdiac.ess-dive.lbl.gov/trends/co2/lawdome.html"><button> Know more about the data mesaurements! </button> </a>
     <br>
    </br><br></br>
    <a href = "https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/lawdome.combined.dat"><button> See the Dataset here!</button> </a>
    <br>
    </br><br></br>
     
     
     <VostokIceCore vostok = {vostokIce} />
     <br></br>
    <a href = "https://cdiac.ess-dive.lbl.gov/trends/co2/vostok.html"><button> Know more about the data mesaurements! </button> </a>
    <br>
    </br><br></br>
    <a href = "https://cdiac.ess-dive.lbl.gov/ftp/trends/co2/vostok.icecore.co2"><button> See the Dataset here!</button> </a>
    <br>
    </br><br></br>
     

     <IceCoreKGraph iceCoreK = {IceCoreYears} />
     <br></br>
    <a href = "https://www.ncei.noaa.gov/access/paleo-search/study/17975"><button> Know more about the data mesaurements! </button> </a>
    <br>
    </br><br></br>
    <a href = "https://www.ncei.noaa.gov/pub/data/paleo/icecore/antarctica/antarctica2015co2composite.txt"><button> See the Dataset here!</button> </a>
    <br>
    </br><br></br>
    
     <TwoMillionYearsGraphdemo v7data1 = {TwoMillionTemperature}  v7data2 = {TwoMillionCo2} /> <br></br>
     <a href = "https://climate.fas.harvard.edu/files/climate/files/snyder_2016.pdf"><button> Know more about the data mesaurements! </button> </a>
     <br>
    </br><br></br>
    <a href = "http://carolynsnyder.com/publications.php"><button> See the Dataset here!</button> </a>
     <br>
     </br>
     <br>
     </br>
     <Link to = "Page"><button>Go for more visualizations</button> </Link>
        </div>
    )
}
export default Home;