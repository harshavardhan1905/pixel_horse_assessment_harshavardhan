//creating the server for the Nutrition food application 
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const {MongoClient} = require("mongodb");
const app = express();
const db_url = process.env.MONGO_URL;


// async function run(){
//     try{
//         const client = new MongoClient(db_url);
//         await client.connect();
//         const db = client.db("harshadb");
//         const data = await db.collection('products').findAll().toArray();
//         res.json(data);   
//     }catch(err){
//         console.log(err.stack)
//     }
// }
// run().catch(console.dir);
app.get('/api/products', async(req, res)=>{
    // res.send("Hello");
    try{
        const client = new MongoClient(db_url);
        await client.connect();
        const db =  client.db('employee');
        const data = await db.collection('demoUser').find().toArray();
        console.log(data);
        res.json(data);
    }catch(err){
        res.send(err);
    }
})



//api for get the data
app.get('/', (req, res)=>{
    res.send("Wellcome! to api");
})



const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})