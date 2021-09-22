const express = require("express");
const server = express();
const bodyParser=require('body-parser');  //to parese the req.body.property
const config=require("./../config/config.json")
var cors = require('cors')
var mongoose = require('mongoose');
server.use(bodyParser.json());
server.use(cors())

const adminRouter = require('./../router/admin');
const employeeRouter = require('./../router/employee');
const taskRouter = require('./../router/task');
const statusRouter=require('./../router/status');
//let { protocal, host, port, name,username,password } = config.app.db;

//  let db= process.env.MONGODB_URL ||`mongodb+srv://admin:admin123@cluster0.qcrci.mongodb.net/schoolsms?retryWrites=true&w=majority`;
 
let db= process.env.MONGODB_URL ||'mongodb+srv://santhosh:Santhosh333@cluster0.fmann.mongodb.net/Taskmanagement?retryWrites=true&w=majority';

console.log('connected tooo the database',db);

mongoose.connect(db, {  useUnifiedTopology: true,  useNewUrlParser: true },function(error)
{
        if(error)
        {
        console.log(error);
        }
        else
        {
        console.log('connected to the database santhosh',db);
        }
	});

server.use("/admin",adminRouter);
server.use("/employee",employeeRouter);
server.use("/task",taskRouter);
server.use("/status",statusRouter);
	
module.exports= server;