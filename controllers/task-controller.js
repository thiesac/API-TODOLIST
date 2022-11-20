const Task = require("../model/task")

async function listarTasks(req, res) {
    const tasks = await Task.find({})
    res.json(tasks)
}

async function cadastrarTask(req, res) {
    let task = new Task(req.body)
    taskSalva = await task.save()
    res.json(taskSalva)
}

async function deletarTask(req, res) {
    let id = req.query.id
    await Task.findByIdAndRemove(id)
    req.status(200)
    res.send("removido índice: " + id)
}

async function alterarTask(req, res) {
    let id = req.query.id
    let task = req.body
    await Task.findByIdAndUpdate(id, task)
    res.send("Alterado com sucesso!")
}

module.exports = {listarTasks, cadastrarTask, deletarTask, alterarTask}
