const express = require("express");
const DBConnect = require("./DBConnect")
const cors = require("cors")
const app = express();
const rout = require("./routing")
app.use(express.json())
app.use(express.static("./images"))
app.use(cors())
DBConnect();
app.get("/",rout.getDemo)


app.get("/student", rout.getStudent)

app.get("/login", rout.getLogin)

app.get("/student/:id",rout.getStudentdetails)

app.post("/student",rout.createStudents)

app.post("/student/upload",rout.upload.single("file"),rout.uploadImg)

app.put("/student/:id",rout.updatestudent)

app.delete("/student/:id",rout.deletestudent)

app.listen(4000,()=>{
    console.log("Server started..");
})