const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');
const sequelize = require('./config/connection');
const { User } = require('./models');
const { SleepCycle } = require('./models');

const app = express();
const PORT = process.env.PORT || 3001;

// Express middleware for req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// start the database and connect to it 
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on ${PORT}`));
});