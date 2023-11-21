const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Express middleware for req.body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

app.listen(PORT, () => console.log(`Now listening on ${PORT}`));