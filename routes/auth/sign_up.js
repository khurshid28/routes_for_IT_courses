let sign_up=function(Router){
    Router.get("/sign_up",(req,res)=>{
        res.send("Welcome to Sign Up Screen")
    })
}

module.exports.sign_up=sign_up