const express = require("express");
const mongoose = require("mongoose");
const mongodb = require('mongodb');
const url = "mongodb://localhost/employees";

const app = express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
const employeeRoutes = require('./routers/employee');
app.use('/emp',employeeRoutes);

mongoose.connect(url, {useNewUrlParser:true}, () => {
    console.log("connected to mongo")
});
const con = mongoose.connection

con.on('open', function(){
    console.log("connected....")
})

app.listen(8000, () => {
    console.log('configered...')
})