const { where } = require('../model/Task');
const Task = require('../model/Task');

//get all tasks
const list = () => {
  return Task.find({});
};

//create a task
const insert = (data) => {
  return new Task(data).save();
};

//get a task with id
const findOne = (where) => {
  return Task.findOne(where);
};

//delete a task
const remove = (id) => {
  return Task.findByIdAndDelete(id);
};

module.exports = {
  list,
  insert,
  findOne,
  remove,
};
