const mongoose = require("mongoose")
    function DBConnect(){
        mongoose.connect("mongodb+srv://Mano:jDKWxgF9xX2JQTZR@cluster0.zk2iw.mongodb.net/studentDB?retryWrites=true&w=majority&appName=Cluster0",
            {
                useNewUrlParser:true
            }).then((conn)=>{
                console.log("Connect to DB");
            }).catch((err)=>{
                console.log("Some error in DB Connection"+err);
                
            })
        
    }

    module.exports=DBConnect;
