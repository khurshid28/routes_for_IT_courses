let group =function(Router){
    Router.get("/group",(req,res)=>{
        res.send("Welcome to Group Chats Screen")
    })
}

module.exports.group=group

