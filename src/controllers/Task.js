const httpStatus = require('http-status');
const { list, insert } = require('../services/Task');

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

module.exports = {
  index,
  create,
};
