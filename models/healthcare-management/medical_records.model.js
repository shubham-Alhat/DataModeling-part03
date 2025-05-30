import { Timestamp } from "bson"
import mongoose, { mongo } from "mongoose"

const medicalRecordSchema = mongoose.Schema({

},{Timestamps:true})

export const MedicalRecords = mongoose.model("MedicalRecords",medicalRecordSchema)