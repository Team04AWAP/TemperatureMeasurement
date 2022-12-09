//express server is created through which we can connect backend and frontend
//cors and axios is used to run modules in the project
//mysql is used to call the database and take the query from database(if any)
//require is used to connect to database
const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const config = require('./config')
const connect = require('./connect')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const port = 3001 //server port which renders data from database
/*
app.get("/",async function (req,res) { 
    try { 
        const connection = await mysql.createConnection(config.db)
        const [result,] = await connection.execute('select * from annualData')
        if (!result) result=[] 
        res.status(200).json(result)
        
    } catch(err) {

        
        res.status(500).json({error: err.message})
    }
})*/


app.get("/v1data",async function (req,res) {
    try { 
        const connection = await mysql.createConnection(config.db)
        const [monthlyData,] = await connection.execute('select * from MonthlyData') // await waits for the process to be done and then shows the output
        const [annualData,] = await connection.execute('select * from annualData')
        const [AnnualNorth,] = await connection.execute('select * from annual_north')
        const [MonthNorth,] = await connection.execute('select * from month_north')
        const [AnnualSouth,] = await connection.execute('select * from annual_south')
        const [MonthSouth,] = await connection.execute('select * from month_south')
        const [TwoThousand,] = await connection.execute('select * from YearsTemperature')
        const [co2Month,] = await connection.execute('select * from co2Month')
        const [co2Annual,] = await connection.execute('select * from co2Annual')
        const [iceCoreDe,] = await connection.execute('select * from iceCorede')
        const [iceCoreDe2,] = await connection.execute('select * from icecorede2')
        const [iceCoreDss,] = await connection.execute('select * from iceCoreDss')
        const [vostokIce,] = await connection.execute('select * from vostokIceCore')
        const [IceCoreYears,] = await connection.execute('select * from iceCore800K')
        const [TwoMillionTemperature,] = await connection.execute('select * from 2mYearTemperature')
        const [TwoMillionCo2,] = await connection.execute('select * from 2mYearCo2')
        const [V10Co2,] = await connection.execute('select * from humanEvolution7Co2')
        const [V4Co2,] = await connection.execute('select * from humanEvolution4Co2')

        //const [Doughnut,] = await connection.execute('select * from doughnutChart')
        //const [Doughnut2,] = await connection.execute('select * from doughnutChart2')
       
        if (!monthlyData) monthlyData=[] 
        if (!annualData) annualData=[]
        if (!AnnualNorth) AnnualNorth=[]
        if (!MonthNorth) MonthNorth=[]
        if (!AnnualSouth) AnnualSouth=[] 
        if (!MonthSouth) MonthSouth=[]
        if (!TwoThousand) TwoThousand=[] 
        if (!co2Month) co2Month=[] 
        if (!co2Annual) co2Annual=[] 
        if (!iceCoreDe) iceCoreDe=[] 
        if (!iceCoreDe2) iceCoreDe2=[]
        if (!iceCoreDss) iceCoreDss=[] 
        if (!vostokIce) vostokIce=[]  
        if (!IceCoreYears) IceCoreYears=[]   
        if (!TwoMillionTemperature) TwoMillionTemperature=[]   
        if (!TwoMillionCo2) TwoMillionCo2=[] 
        if (!V10Co2) V10Co2=[]   
        if (!V4Co2) V4Co2=[]    
     
        /*const [result,] = await connection.execute('select * from annualData')
        if (!result) result=[] 
        res.status(200).json(result)
        **/
       res.json({
        AnnualNorth: AnnualNorth,
        AnnualSouth: AnnualSouth,
        MonthNorth: MonthNorth,
        MonthSouth: MonthSouth,
        monthlyData: monthlyData,
        TwoThousand: TwoThousand,
        annualData: annualData,
        co2Month: co2Month,
        co2Annual: co2Annual,
        iceCoreDe: iceCoreDe,
        iceCoreDe2: iceCoreDe2,
        iceCoreDss: iceCoreDss,
        vostokIce: vostokIce,
        IceCoreYears: IceCoreYears,
        TwoMillionTemperature: TwoMillionTemperature,
        TwoMillionCo2: TwoMillionCo2,
        V10Co2: V10Co2,
        V4Co2: V4Co2
        //Doughnut: Doughnut,
        //Doughnut2: Doughnut2
       });
        
    } catch(err) {

        
        res.status(500).json({error: err.message})
    }
})

app.post("/signUp",async function (req,res) {
    try { 
        const connection = await mysql.createConnection(connect.db)
        const email = await connection.execute('insert * into email ')
        const Password = await connection.execute('insert * into Password ')
        if (!email) email= ({})
        if (!Password) Password= ({})
        if (!firstname) firstname= ({})
        if (!lastname) lastname= ({})
        res.json({
            email: email,
            Password: Password,
            firstname: firstname,
            lastname: lastname

    });
} catch(err) {
    
    res.status(500).json({error: err.message})
}
})

app.get("/signUp",async function (req,res) {
    try { 
        const connection = await mysql.createConnection(connect.db)
        const [logIn,] = await connection.execute('select * from logIn')
        if (!logIn) logIn= []
        res.json({
            logIn: logIn
    });
} catch(err) {

        
    res.status(500).json({error: err.message})
}
})
app.get("/v2data",async function (req,res) {
    try { 
        const connection = await mysql.createConnection(config.db)
        const [Doughnut,] = await connection.execute('select * from doughnutChart')
        const [Doughnut2,] = await connection.execute('select * from doughnutChart2')
        if (!Doughnut) Doughnut=[]  
        if (!Doughnut2) Doughnut2=[] 
        res.json({ 
            Doughnut: Doughnut,
            Doughnut2: Doughnut2
           });
            
        } catch(err) {
    
            
            res.status(500).json({error: err.message})
        }
    })


/*app.get("/v2data",async function (req,res) {
    try { 
        const connection = await mysql.createConnection(config.db)
        const [signUp,] = await connection.execute('select * from react-login') // await waits for the process to be done and then shows the output
       
        if (!signUp) signUp=[] 
        

        /*const [result,] = await connection.execute('select * from annualData')
        if (!result) result=[] 
        res.status(200).json(result)
        **/
      // res.json({
       // signUp: signUp
       //}); 

        
//    } catch(err) {

        
  //      res.status(500).json({error: err.message})
  //  }
//})

app.listen(port)