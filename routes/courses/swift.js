let swift =function(Router){
    Router.get("/swift",(req,res)=>{
        res.send("Welcome to Swift Screen")
    })
}

module.exports.swift=swift