const httpStatus = require('http-status');
const { list, insert, findOne, remove } = require('../services/Task');

//list all tasks
const index = (req, res) => {
  list()
    .then((itemList) => {
      if (!itemList) res.status(httpStatus.INTERNAL_SERVER_ERROR).send('There is no any record');

      res.status(httpStatus.OK).send(itemList);
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

//create a task
const create = (req, res) => {
  insert(req.body)
    .then((response) => {
      res.status(httpStatus.CREATED).send(response);
    })
    .catch((e) => {
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e);
    });
};

//get a task with id
const fetchTask = (req, res) => {
  findOne({ _id: req.params.id })
    .then((task) => {
      if (!task) res.res.status(httpStatus.NOT_FOUND).send('No such a record');

      res.status(httpStatus.OK).send(task);
    })
    .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
};

const deleteTask = (req, res) => {
  remove(req.params?.id)
    .then((deletedItem) => {
      if (!deletedItem) res.res.status(httpStatus.NOT_FOUND).send('No such a record');

      res.status(httpStatus.OK).send(deletedItem);
    })
    .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
};
module.exports = {
  index,
  create,
  fetchTask,
  deleteTask,
};
