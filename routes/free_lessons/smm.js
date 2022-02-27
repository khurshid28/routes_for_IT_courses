let smm =function(Router){
    Router.get("/smm",(req,res)=>{
        res.send("Welcome to SMM Courses Screen")
    })
}

module.exports.smm=smm