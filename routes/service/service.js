let service =function(Router){
    Router.get("/",(req,res)=>{
        res.send("Welcome to Service Screen")
    })
}

module.exports.service=service
