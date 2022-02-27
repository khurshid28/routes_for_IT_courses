const express=require("express")
const Router=express.Router()

//forget_password
require("../forget_password").forget_password(Router)
//sign_in
require("../sign_in").sign_in(Router)
//sign_up
require("../sign_up").sign_up(Router)
//sign_out
require("../sign_out").sign_out(Router)

module.exports.auth=Router
