const Mongoose = require('mongoose');

const db = Mongoose.connection;

db.once('open', () => {
  console.log('Db connection is successful');
});

const connectDB = async () => {
  const { DB_HOST, DB_PORT, DB_NAME } = process.env;

  await Mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connectDB,
};
