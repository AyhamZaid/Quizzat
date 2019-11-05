var express = require("express");
var cors = require("cors");
var app = express();
const DB =require('./db');
app.use(express.json());

app.use(cors());

app.get("/",(req,res)=>{
    res.json(`server working`);
})
// app.post(`/insert`,(req,res)=>{

// //    let obj=req.body;
//   // res.json(obj);
//    console.log(req.body);

// //     DB.insertUser(user=>{
// //         res.json(user);
// //     },obj);
// })

app.post("/insertUser", (req, res) => {
    DB.insertUser(user => {
      res.json(user);
    }, req.body);

});

app.post("/insertQuestion", (req, res) => {
    DB.insertQuestion(question => {
      res.json(question);
    }, req.body);

});




var port = process.env.PORT || 9000;
app.listen(port, function() {
    console.log("Server is running on port: " + port);
  });
  