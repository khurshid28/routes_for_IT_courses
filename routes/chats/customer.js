let customer =function(Router){
    Router.get("/customer",(req,res)=>{
        res.send("Welcome to Customer Chats Screen")
    })
}

module.exports.customer=customer
