const Mongoose = require('mongoose');

const TaskSchema = new Mongoose.Schema(
  {
    name: String,
    status: String,
  },
  { timeStamps: true, versionKey: false }
);

module.exports = Mongoose.model('Task', TaskSchema);
