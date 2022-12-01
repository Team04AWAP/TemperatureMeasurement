//express server is created through which we can connect backend and frontend
//cors and axios is used to run modules in the project
//mysql is used to call the database and take the query from database(if any)
//require is used to connect to database
const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const config = require('./config')

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
        //const [TwoThousand,] = await connection.execute('select * from YearsTemperature')
        if (!monthlyData) monthlyData=[] 
        if (!annualData) annualData=[]
        if (!AnnualNorth) AnnualNorth=[]
        if (!MonthNorth) MonthNorth=[]
        if (!AnnualSouth) AnnualSouth=[] 
        if (!MonthSouth) MonthSouth=[]
        //if (!TwoThousand) TwoThousand=[]    
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
        //TwoThousand: TwoThousand,
        annualData: annualData
       });
        
    } catch(err) {

        
        res.status(500).json({error: err.message})
    }
})

app.listen(port)