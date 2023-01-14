const httpStatus = require('http-status');
//const { list, insert, findOne, remove, modify } = require('../services/Task');
const TaskService = require('../services/TaskService');
const ApiError = require('../errors/ApiError');

//list all tasks
const index = (req, res, next) => {
  TaskService.list()
    .then((itemList) => {
      res.status(httpStatus.OK).send(itemList);
    })
    .catch((e) => {
      next(new ApiError(e?.message));
    });
};

//create a task
const create = (req, res, next) => {
  TaskService.create(req.body)
    .then((response) => {
      res.status(httpStatus.CREATED).send(response);
    })
    .catch((e) => {
      next(new ApiError(e?.message));
    });
};

//get a task with id
const fetchTask = (req, res, next) => {
  TaskService.findOne({ _id: req.params.id })
    .then((task) => {
      if (!task) return next(new ApiError('No such a record', httpStatus.NOT_FOUND));

      res.status(httpStatus.OK).send(task);
    })
    .catch((e) => {
      next(new ApiError(e?.message));
    });
};

//update a task
const update = (req, res) => {
  if (!req.params?.id) {
    return res.status(httpStatus.BAD_REQUEST).send({ message: 'Missing information' });
  }
  TaskService.update(req.params?.id, req.body)
    .then((response) => {
      if (!response) return res.status(httpStatus.NOT_FOUND).send({ message: 'Task not found' });
      res.status(httpStatus.OK).send(response);
    })
    .catch((e) => res.status(httpStatus.INTERNAL_SERVER_ERROR).send(e));
};

const deleteTask = (req, res, next) => {
  TaskService.delete(req.params?.id)
    .then((deletedItem) => {
      if (!deletedItem) return next(new ApiError('No such a record', httpStatus.NOT_FOUND));

      res.status(httpStatus.OK).send(deletedItem);
    })
    .catch((e) => {
      next(new ApiError(e?.message));
    });
};
module.exports = {
  index,
  create,
  fetchTask,
  deleteTask,
  update,
};
