const mongoose=require("mongoose")
let schema=mongoose.Schema(
    {
        ename:String,
        eage:String,
        edepartment:String,
        esalary:String,
        eid:String

    }
)
let pmodel=mongoose.model("employees",schema)
module.exports=pmodel