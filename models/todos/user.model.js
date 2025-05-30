import mongoose from "mongoose"

const userSchema = new mongoose.Schema(
  {
    username:{
      type:String,
      required:true,
      unique:true,
      lowercase:true
    },
    email:{
      type:String,
      required:true,
      unique:true,
      lowercase:true
    },
    password:{
      type:String,
      required:true,
    }
  },
  {timestamps:true}   // It adds the createdAT and updateAt
)

export const User = mongoose.model('User',userSchema)