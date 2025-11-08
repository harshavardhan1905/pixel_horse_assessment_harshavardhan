//creating the server for the Nutrition food application 
require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const {MongoClient} = require("mongodb");
const app = express();
const now = new Date().toISOString();
const db_url = process.env.MONGO_URL;
//mongodb connection
mongoose.connect(process.env.MONGO_URL)

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(
    cors({
        origin: "http://localhost:5173",
    })
)


app.post('/api/add/product', async(req, res)=>{
    try{
        const client = new MongoClient(db_url);
        await client.connect();
        const db =  client.db('harshadb');
        console.log(req.body)
        const data = {
            product_id: req.body.product_id,
            product_name: req.body. product_name,
            product_price: req.body. product_price,
            product_category: req.body. product_category,
            product_image: req.body. product_image,
            added_date: req.body.addedd_date ||now
        };

        const productsData = await db.collection("products").insertOne(data);
        console.log(data);
        res.status(201).json(productsData); 
    }catch(err){
        console.log(err)
    }
    
});
app.get('/api/products', async(req, res)=>{
    // res.send("Hello");
    try{
        const client = new MongoClient(db_url);
        await client.connect();
        const db =  client.db('harshadb');
        const data = await db.collection('products').find().toArray();
        // console.log(data);
        res.json(data);
    }catch(err){
        res.send(err);
    }
})

//delete product api
app.delete("/api/delete/product/:id", async(req, res)=>{
    const proId = req.params.id;
    try{
        // const productId = req.body.product_id;
        const client = new MongoClient(db_url);
        await client.connect();
        const db = client.db('harshadb');
        const product = await db.collection('products').findOne({product_id: proId});
        if(!product){
            return res.status(404).json({message: "Product not found"});
        }
        const result = await db.collection('products').deleteOne({product_id: proId});
        if(result.deletedCount>=1){
            return res.json({
                message:"Product deleted..",
              
            })
        }
    }catch(err){
        console.log(err)
    }
})


//api for update the product
app.patch('/api/update/product/:id', async(req, res)=>{
    const proId = req.params.id;
    const data = {
            product_id: req.body.product_id,
            product_name: req.body. product_name,
            product_price: req.body. product_price,
            product_category: req.body. product_category,
            product_image: req.body. product_image,
            added_date: req.body.addedd_date,
            updated_date: now
        };
    try{
        const client = new MongoClient(db_url);
        await client.connect();
        const db = client.db('harshadb');
        const existing = await db.collection('products').findOne({product_id: proId});
        if(!existing){
            return res.status(404).json({message:"product not found"});
        }
        const result = await db.collection('products').updateOne(
      { product_id: proId },
      { $set: data }
     
    );
     console.log(data);

    res.json({
      message: "Product updated successfully",
      updated: await db.collection("products").findOne({ product_id: proId })
    });

    }catch(err){
        console.log(err);
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