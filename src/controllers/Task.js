const httpStatus = require('http-status');
const { list, insert, findOne, remove } = require('../services/Task');
const ApiError = require('../errors/ApiError');

//list all tasks
const index = (req, res, next) => {
  list()
    .then((itemList) => {
      res.status(httpStatus.OK).send(itemList);
    })
    .catch((e) => {
      next(new ApiError(e?.message));
    });
};

//create a task
const create = (req, res, next) => {
  insert(req.body)
    .then((response) => {
      res.status(httpStatus.CREATED).send(response);
    })
    .catch((e) => {
      next(new ApiError(e?.message));
    });
};

//get a task with id
const fetchTask = (req, res, next) => {
  findOne({ _id: req.params.id })
    .then((task) => {
      if (!task) return next(new ApiError('No such a record', httpStatus.NOT_FOUND));

      res.status(httpStatus.OK).send(task);
    })
    .catch((e) => {
      next(new ApiError(e?.message));
    });
};

const deleteTask = (req, res, next) => {
  remove(req.params?.id)
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
};
