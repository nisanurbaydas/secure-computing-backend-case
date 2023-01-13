const Task = require('../model/Task');

//get all tasks
const list = () => {
  return Task.find({});
};

//create a task
const insert = (data) => {
  return new Task(data).save();
};

module.exports = {
  list,
  insert,
};
