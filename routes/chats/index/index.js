const express=require("express")
const Router=express.Router()

//customer
require("../customer").customer(Router)
//group
require("../group").group(Router)


module.exports.chats=Router