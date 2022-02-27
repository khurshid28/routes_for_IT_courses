const express=require("express")
const Router=express.Router()

//service
require("../service").service(Router)


module.exports.service=Router