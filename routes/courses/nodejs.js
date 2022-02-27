let nodejs =function(Router){
    Router.get("/nodejs",(req,res)=>{
        res.send("Welcome to Nodejs Screen")
    })
}

module.exports.nodejs=nodejs