let flutter =function(Router){
    Router.get("/flutter",(req,res)=>{
        res.send("Welcome to Flutter Courses Screen")
    })
}

module.exports.flutter=flutter