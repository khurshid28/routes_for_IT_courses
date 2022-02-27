const express=require("express")
const Router=express.Router()

//c_cpp
require("../c_cpp").c_cpp(Router)
//flutter
require("../flutter").flutter(Router)
//html_css
require("../html_css").html_css(Router)
//kotlin
require("../kotlin").kotlin(Router)
//nodejs
require("../nodejs").nodejs(Router)
//python
require("../python").python(Router)
//swift
require("../swift").swift(Router)

module.exports.courses=Router