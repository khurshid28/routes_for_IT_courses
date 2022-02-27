const express=require("express")
const app=express()
let port=process.env.PORT || 5000

//routes
const router=require("./routes/index")


//about_us 
app.use("/about",router.about)

//auth 
app.use("/auth",router.auth)

//chats 
app.use("/chats",router.chats)

//courses 
app.use("/courses",router.courses)

//figma_designs 
app.use("/figma_designs",router.figma_designs)

//free_lessons 
app.use("/free_lessons",router.free_lessons)

//service 
app.use("/service",router.service)

//home
app.use("/",router.home)



app.listen(port,()=>{
    console.log("Server is Working in "+port+" PORT")
})
