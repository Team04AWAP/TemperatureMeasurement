const express = require('express')
const cors = require('cors')
const mysql = require('mysql2/promise')
const config = require('./config')

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: false}))

const port = 3001
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
        const [monthlyData,] = await connection.execute('select * from MonthlyData')
        const [annualData,] = await connection.execute('select * from annualData')
        if (!monthlyData) monthlyData=[] 
        if (!annualData) annualData=[] 
        /*const [result,] = await connection.execute('select * from annualData')
        if (!result) result=[] 
        res.status(200).json(result)
        **/
       res.json({
        test: ['my array'],
        test2: "something else",
        monthlyData: monthlyData,
        annualData: annualData
       });
        
    } catch(err) {

        
        res.status(500).json({error: err.message})
    }
})

app.listen(port)