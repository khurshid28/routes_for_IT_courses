let flutter =function(Router){
    Router.get("/flutter",(req,res)=>{
        res.send("Welcome to Flutter Screen")
    })
}

module.exports.flutter=flutter