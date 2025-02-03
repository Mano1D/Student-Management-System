const Student = require("./Student")
const multer = require("multer")
let fname = ""


function getDemo(req, res) {
    res.send("This is from server")
}

const storage = multer.diskStorage({
    destination:(req,res,cb)=>{
        cb(null, "images")
    },
    filename:(req,file,cb)=>{
        cb(null,fname)
    }
})

exports.upload = multer({
    storage:storage
})


async function getStudent(req, res) {
    try {
        const students = await Student.find()
        res.status(201).json({
            students
        })
    } catch (error) {
        res.send("Some error occured")
    }
    //res.send("This is Student page")
}

//To export function directly
exports.getLogin = (req, res) => {
    res.send("This is Login page")
}

exports.getStudentdetails = async (req, res) => {
    //res.send("This is the details of " + req.params.id)
    try {
        const student = await Student.findById(req.params.id);
        res.status(201).json({
            student
        })
    } catch (error) {
        res.send(error);
    }
}

exports.uploadImg = async (req, res) => {
    try {
       

        res.status(201).json({
            msg: "uploaded"
        }
        )
    } catch (error) {
        res.send(error)
    }
    
    //res.send("New student is inserted")
}

exports.createStudents = async (req, res) => {
    try {
        const student = await Student.create(req.body)
        fname = req.body.simage;
        //console.log(fname);

        res.status(201).json({
            msg: "Created",
            data: student
        }
        )
    } catch (error) {
        res.send(error)
    }
    
    //res.send("New student is inserted")
}

exports.updatestudent = async (req, res) => {
    try {
        const updatestudent = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        res.status(201).json({
            updatestudent,
            msg: "Updated"
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            msg: error
        })
    }
}

exports.deletestudent = async (req, res) => {
    try {
        await
    Student.findByIdAndDelete(req.params.id);
        res.status(201).json({
            status: "Success",
            message: "Deleted"
        })
    } catch (error) {
        res.status(400).json({
            status: "Fail",
            msg: error
        })
    }
}
    exports.getDemo = getDemo;
    exports.getStudent = getStudent;
