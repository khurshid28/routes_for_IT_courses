let backend =function(Router){
    Router.get("/backend",(req,res)=>{
        res.send("Welcome to Backend Courses Screen")
    })
}

module.exports.backend=backend