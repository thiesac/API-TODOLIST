const mongoose = require ('mongoose')
const TaskSchema = new mongoose.Schema( { descricao:String, concluida: Boolean} )
const task = mongoose.model ("Task",TaskSchema)

module.exports = task