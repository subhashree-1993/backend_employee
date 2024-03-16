const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

const mongodburl = process.env.mongo_db;

const dbconnect = ()=>{
    mongoose
    .connect(mongodburl)
  
    .then(() => {
      console.log(`DB = ${mongodburl}`);
      console.log("Backend also hosted in Render.com")
    })
    .catch(() => {
      console.log("error while connect");
    });
}

module.exports = dbconnect;
