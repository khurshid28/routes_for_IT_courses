let html_css =function(Router){
    Router.get("/html_css",(req,res)=>{
        res.send("Welcome to HTML/CSS Screen")
    })
}

module.exports.html_css=html_css