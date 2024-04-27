import app from './app.js'
import mongoose from "mongoose";
const port = 4000

//DATA BASE Connection - MONGODB
    // const mongoose = require('mongoose');
  
    mongoose.connect('mongodb://127.0.0.1:27017/test');
    (async()=>{
        try {
            // DB connection
           await mongoose.connect('mongodb://127.0.0.1:27017/test')
           console.log("DB connected to database Successfully");
           app.on("ERROR" ,(err)=>{
            console.log("ERROR", err);
            throw err
           })

           const onListening =()=>{
            console.log(`Listening on port ${port}`);
           }

           app.listen(port, onListening)



        } catch (error) {
            console.log("ERROR",err)
            throw err
        }
    })()



// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })