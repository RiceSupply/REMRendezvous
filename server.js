const express = require('express');
const exphbs = require('express-handlebars');
const routes = require('./src/pages');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Now listening on ${PORT}`));