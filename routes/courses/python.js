let python =function(Router){
    Router.get("/python",(req,res)=>{
        res.send("Welcome to Python Screen")
    })
}

module.exports.python=python