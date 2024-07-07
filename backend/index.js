const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config(); //for .env
const app = express();
const todos = require("./db");
const todovalidate = require("./type");
const port = 80;


app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI);

//too add todo to the database
app.post("/todo",async (req,res)=>{
    try{
       
        const titlevalid = todovalidate.safeParse(req.body);

        if(!titlevalid.success){
            console.log("body is not providing proper information");
        }
        const {title,description} = req.body;
        const todo = new todos({
            title: title,
            description:description
        })
        await todo.save();
        res.status(201).json("todo added successfully");
    }catch(err){
        console.log("todo not getting added properly");
        console.log(err);
    }
})

//update the todo as complete
app.put("/todo",async (req,res)=>{
    try{
        const id = req.headers.id;
        const updatetodo = await todos.updateOne({_id:id},{$set: {completed:true}});
        res.send(updatetodo);
            console.log(updatetodo);
            console.log("Updated the todo properly");
        }catch(err){
            console.log("Error is put methode");
    }

})

app.get("/todos",async(req,res)=>{
    try{
        const alltodos = await todos.find({});
        res.json(alltodos);
        console.log(alltodos);
    }catch(err){
        console.log(err);
        console.log("not getting todo properly");
        res.json("Now getting todo properly")
    }
})

app.delete("/todo",async(req,res)=>{
    try{
        const id = req.headers.id;
        const deletetodo = await todos.deleteOne({_id:id});
        console.log(deletetodo);
    }catch(err){
        console.log(err);
        console.log("Not deleted the todo properly");
    }
})

app.get("/",(req,res)=>{
    res.send("working fine!")
})
    


app.listen(port,()=>{
    console.log(`Server running in ${port}`);
})