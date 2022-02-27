let sign_out=function(Router){
    Router.get("/sign_out",(req,res)=>{
        res.send("Welcome to Sign Out Screen")
    })
}

module.exports.sign_out=sign_out