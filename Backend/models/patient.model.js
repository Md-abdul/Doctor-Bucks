const mongoose = require("mongoose");

const patientSchema = mongoose.Schema({
  name: String,
  Address: String,
  problem: String,
  doctorname: String,
  age: Number,
  gender: String,
  admitTime: String,
  admitDate: String,
  suger: String,
});

const PatientModel = mongoose.model("patient", patientSchema);

module.exports = PatientModel;
