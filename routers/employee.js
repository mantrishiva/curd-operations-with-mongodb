const express = require('express');
const router = express.Router();
const Employee = require('../model/employee')

router.get('/', async (req,res) => {
    // res.send("get Request")
    try{
        const employees = await Employee.find()
        res.json(employees)
    }catch(err){
        console.log("error",err)
    }
})

router.post('/', async (req,res) => {
    const employeeData = new Employee({
        name: req.body.name,
        department: req.body.department
    });
    try{
       const e1 = await employeeData.save()
       res.json(e1) 
    }catch(err){
        res.send("Error")
    }
})

router.get('/:id', async (req,res) => {
    try{
        const employees = await Employee.findById(req.params.id)
        res.json(employees)
    }catch(err){
        console.log("error",err)
    }
})

module.exports = router 