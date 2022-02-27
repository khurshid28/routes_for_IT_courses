let mobile =function(Router){
    Router.get("/mobile",(req,res)=>{
        res.send("Welcome to Mobile Design Screen")
    })
}

module.exports.mobile=mobile