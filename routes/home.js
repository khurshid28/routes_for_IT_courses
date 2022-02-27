const express=require("express")
const Router=express.Router()


Router.get("/",(req,res)=>{
    res.send("Welcome to Home Screen")
})

module.exports.home=Router