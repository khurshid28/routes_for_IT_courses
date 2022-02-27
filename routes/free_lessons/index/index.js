const express=require("express")
const Router=express.Router()

//backend
require("../backend").backend(Router)
//flutter
require("../flutter").flutter(Router)
//frontend
require("../frontend").frontend(Router)
//smm
require("../smm").smm(Router)

module.exports.free_lessons=Router