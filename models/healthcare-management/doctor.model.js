import mongoose, { mongo } from "mongoose"

const doctorSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  salary:{
    type:Number,
    required:true
  },
  qualification:{
    type:String,
    required:true
  },
  experiance:{
    type:String,
    required:true
  },
  worksInHospital:[
    {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Hospital"
    }
  ]
},{Timestamps:true})

export const Doctor = mongoose.model("Doctor",doctorSchema)