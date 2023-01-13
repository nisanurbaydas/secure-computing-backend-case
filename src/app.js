const express = require('express');

const config = require('./config/index');
const loaders = require('./loaders');

const { TaskRoutes } = require('./routes');

const app = express();

config();
loaders();

app.use(express.json());

const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
  console.log(`App listening on port 3000`);

  app.use('/tasks', TaskRoutes);
});
