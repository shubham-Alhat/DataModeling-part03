import mongoose, { mongo } from "mongoose"

const hospitalSchema = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  address:{
    type:String,
    required:true
  },
  city:{
    type:String,
    required:true
  },
  pincode:{
    type:String,
    required:true
  }
},{Timestamps:true})

export const Hospital = mongoose.model("Hospital",hospitalSchema)