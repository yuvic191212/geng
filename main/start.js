weblib = require("express")
web = weblib()
console.log("server starting")
//handle test page
web.all("/test",function(req,res){res.send("hi")})
