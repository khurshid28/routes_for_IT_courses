let kotlin =function(Router){
    Router.get("/kotlin",(req,res)=>{
        res.send("Welcome to Kotlin Screen")
    })
}

module.exports.kotlin=kotlin