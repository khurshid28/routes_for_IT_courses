//about
const {about}=require("./about/index/index")
//auth
const {auth}=require("./auth/index/index")
//chats
const {chats}=require("./chats/index/index")
//courses
const {courses}=require("./courses/index/index")
//figma_designs
const {figma_designs}=require("./figma_designs/index/index")
//free_lessons
const {free_lessons}=require("./free_lessons/index/index")
//service
const {service}=require("./service/index/index")
//home
const {home}=require("./home")

module.exports={
    about,
    auth,
    courses,
    chats,
    figma_designs,
    free_lessons,
    service,
    home,
}