let sign_in=function(Router){
    Router.get("/sign_in",(req,res)=>{
        res.send("Welcome to Sign In Screen")
    })
}

module.exports.sign_in=sign_in