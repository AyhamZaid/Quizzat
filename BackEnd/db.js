const mongoose = require("mongoose")
const Schema = mongoose.Schema
mongoose.connect('mongodb://localhost/QuizeApp',{useNewUrlParser:true});
const db=mongoose.connection;

db.on("error", function() {
    console.log("mongoose connection error");
    console.log("__");
  });
  db.once("open", function() { 
    console.log("mongoose connected successfully");
    console.log("__");
  });
  const User = new mongoose.Schema({
    name: {
        type:String
    },
    email:{
        type: String,
        required : true
    },
    password:{
        type:String,
        required:true
    },
    score:{
        type:Number
    },
    gold:{
        type:Number
    }
})
 const Question=new mongoose.Schema({
     fields:{
         type:String
     },
     query:[{
         id:{ type: Number } ,
         question:{
             type:String
            },
         answer:[{
            option1 : { type: String },
            option2 : {
                type:String
               },
            option3 : {
                type:String
               },
            option4 : {
                type:String
               }
                 }],
         correctIndex:{type:Object}
     }]
        

 })
    let Users=mongoose.model("Users",User)
    let Questions=mongoose.model("Questions",Question
    )


    let insertUser=(cb,obj)=>{
         //console.log(obj);
        Users.create(obj,(err,doc)=>{
             if (err) {
                  console.log("ERR:", err);
                }
                else{
                    cb(doc)
                }
        })
    }
    // let getQuestion=cb=>{
    //     console.log('GET TASKS FROM DATABASE');
    //     Questions.find({},
    //         function(err, docs) {
    //            
    //             console.log("DOCS:", docs);
    //             cb(docs);
    //           });
    // };

    let insertQuestion=(cb,obj)=>{
       // console.log("insertQuestion");
       Questions.create(obj,(err,doc)=>{
            if (err) {
                 console.log("ERR:", err);
               }
               else{
                   cb(doc)
               }
       })
   }
 
  module.exports={
    insertQuestion,
    insertUser
  };
