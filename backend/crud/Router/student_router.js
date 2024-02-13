const express = require('express')
const { Post_data, Get_data, Update_data, Delete_data } = require('../Student_crud')

const router = express.Router()

router.post('/create', Post_data)

router.get('/read', Get_data)

router.put('/update/:id', Update_data)

router.delete('/delete/:id', Delete_data)

module.exports = router
