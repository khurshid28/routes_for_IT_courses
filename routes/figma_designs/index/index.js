const express=require("express")
const Router=express.Router()

//mobile
require("../mobile").mobile(Router)
//web
require("../web").web(Router)


module.exports.figma_designs=Router