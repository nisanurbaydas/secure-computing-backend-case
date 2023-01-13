const express = require('express');

const config = require('./config/index');

const app = express();

config();

app.use(express.json());

const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
  console.log(`App listening on port 3000`);
});
