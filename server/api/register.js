const express = require("express")
const User = require("../db/db.js").User

const app = express()
const router = express.Router()
router.post('/',async (req,res)=>{
   const user = await User.create({
       userName:req.body.username,
       password:req.body.password,
       userAccount:req.body.useraccount
   })
   res.send(user)
    // console.log(req.body)
    // res.send("register")
})

module.exports = router