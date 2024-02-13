const mongoose = require('mongoose')

const student_schema = mongoose.Schema({
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  FatherName: {
    type: String,
    required: true,
  },
  MotherName: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Address: {
    type: String,
    required: true,
  },
  DateofBirth: {
    type: String,
    required: true,
  },
  Contact: {
    type: String,
    required: true,
  },
  FatherNumber: {
    type: String,
    required: true,
  },
  MaritalStatus: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    required: true,
  },
  Qualification: {
    type: String,
    required: true,
  },
  CGPAPercentage: {
    type: String,
    required: true,
  },
  PassedOutYear: {
    type: String,
    required: true,
  },
  TotalAmount: {
    type: Number,
    required: true,
  },
  PaidAmount: {
    type: Number,
    required: true,
  },
  RemainingAmount: {
    type: Number,
    required: true,
  },
})

module.exports = mongoose.model('Student_collection', student_schema)
