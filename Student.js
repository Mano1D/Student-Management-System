const mongoose = require("mongoose");
const studentSchema =new mongoose.Schema({
    stud_name:{
        type:String,
        required:[true,"Name is required"],
        trim:true
    },
    stud_dept:{
        type:String,
        required:[true,"Department is missing"],
        trim:true
    },
    email_id:{
        type:String,
        required:[true,"Enter email id"],
        lowercase:true
    },
    marks:{
        type:Number,
        min:[50,"Low marks to enter here"],
        required:[true,"Enter your mark"]
    },
    simage:{
        type: String
    }
})

const student= mongoose.model("student",studentSchema);

module.exports = student;