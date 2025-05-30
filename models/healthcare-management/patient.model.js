import mongoose, { mongo } from "mongoose"

const patientSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  bloodGroup:{
    type:String,
    required:true
  },
  age:{
    type:Number,
    reqired:true
  },
  gender:{
    type:String,
    enum:["Male","Female","Others"]
  },
  hospital:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Hospital"
  }
},{Timestamps:true})

export const Patient = mongoose.model("Patient",patientSchema)