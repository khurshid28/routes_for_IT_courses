let web =function(Router){
    Router.get("/web",(req,res)=>{
        res.send("Welcome to Web Design Screen")
    })
}

module.exports.web=web