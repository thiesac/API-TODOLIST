const express = require('express')
const router = express.Router()
const taskController = require('../controllers/task-controller')

router.get("/", taskController.listarTasks)

router.post("/", taskController.cadastrarTask)

router.delete("/", taskController.deletarTask)

router.put("/", taskController.alterarTask)

module.exports = router