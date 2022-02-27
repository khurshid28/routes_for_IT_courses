const express=require("express")
const Router=express.Router()

//about
require("../about").about(Router)


module.exports.about=Router