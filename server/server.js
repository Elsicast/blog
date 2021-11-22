const express = require("express")
const app = express()
app.use(express.urlencoded({extended: false}))
app.use(express.json())
const route = require("./api/index.js")
const db = require("./db/db.js")

// 引入body-parser模块，用来处理post请求参
route(app)
// app.all("*",function(req,res,next){
//     //设置允许跨域的域名，*代表允许任意域名跨域
//     res.header("Access-Control-Allow-Origin","*");
//     //允许的header类型
//     res.header("Access-Control-Allow-Headers","content-type");
//     //跨域允许的请求方式 
//     res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
//     if (req.method.toLowerCase() == 'options')
//         res.send(200);  //让options尝试请求快速结束
//     else
//         next();
// });

app.get('/api/users',async function(req, res){
    const users = await db.User.find()
    res.send(users)
})

app.listen(2358, function(){
    console.log('http://localhost:2358')
})
