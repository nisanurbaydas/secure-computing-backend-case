const BaseService = require('./BaseService');
const BaseModel = require('../model/Task');

class TaskService extends BaseService {
  constructor() {
    super(BaseModel);
  }
}

module.exports = new TaskService();
