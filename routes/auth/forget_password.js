let forget_password=function(Router){
    Router.get("/forget_password",(req,res)=>{
        res.send("Welcome to Forget Password Screen")
    })
}

module.exports.forget_password=forget_password