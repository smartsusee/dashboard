const student_schema = require('../schema/student_schema')

const Post_data = async (req, res) => {
  const Student_data = student_schema({
    ...req.body,
  })
  const Save_student = await Student_data.save()
  res.json({ data: Save_student, msg: 'student details added' })
}

const Get_data = async (req, res) => {
  const Get_student_data = await student_schema.find({})

  res.json(Get_student_data)
}

const Update_data = async (req, res) => {
  const update_student_data = await student_schema.findByIdAndUpdate(
    req.params.id,
    { $set: req.body },
    { new: true },
  )

  res.json({ data: update_student_data, msg: 'update successfully' })
}

const Delete_data = async (req, res) => {
  const Delete_student_data = await student_schema.findByIdAndDelete(req.params.id)

  res.json({ data: Delete_student_data, msg: 'delete successfully' })
}

module.exports = { Post_data, Get_data, Update_data, Delete_data }
