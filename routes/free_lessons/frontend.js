let frontend =function(Router){
    Router.get("/frontend",(req,res)=>{
        res.send("Welcome to Frontend Courses Screen")
    })
}

module.exports.frontend=frontend