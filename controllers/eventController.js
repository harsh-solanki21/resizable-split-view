const Task = require('../models/Event')

const getData = async (req, res) => {
  try {
    const tasks = await Task.find()
    res.status(200).send(tasks)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const addData = async (req, res) => {
  try {
    const task = new Task(req.body)
    await task.save()
    res.status(200).send(task)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const updateData = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id)
    task.data = req.body.data
    await task.save()
    res.status(200).send(task)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  getData,
  addData,
  updateData,
}
