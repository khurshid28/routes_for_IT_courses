let about =function(Router){
    Router.get("/",(req,res)=>{
        res.send("Welcome to About Screen")
    })
}

module.exports.about=about
