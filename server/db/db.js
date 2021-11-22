const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/blog')
const db = mongoose.connection,
Schema = mongoose.Schema
db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open',function() {
//     console.log("connected");
// })

const userSchema = new Schema({
    userName: { type: String },
    userAccount: { type: String, unique:true },
    password: { type: String }
})
const Models = {
    User: mongoose.model('User',userSchema)
}
const initialize = () =>{
    Models.User.find({},(err,doc)=>{
        if(err){
            console.log("initialize failed")
        }else if(!doc.length){
            new Models['User']({userName:'admin',userAccount:'admin',password:'123456'}).save(function (err) {
                if(err) console.log("error!")
            });
            console.log("initialize successfully!")
        }else console.log("initialize successful")
    })
}
db.once('open',function() {
    console.log("connected");
    initialize();
})
module.exports = Models
