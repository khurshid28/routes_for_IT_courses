let c_cpp =function(Router){
    Router.get("/c_cpp",(req,res)=>{
        res.send("Welcome to C/Cpp Screen")
    })
}

module.exports.c_cpp=c_cpp