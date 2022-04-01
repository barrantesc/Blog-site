//-- access to stylesheet within express app
const path = require('path');
//-- Express
const express = require('express');
// express-session
const session = require('express-session')
//-- Defining APP template engine - Using Handelbars
const exphbs = require('express-handlebars');

const routes = require('./controllers');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

//-- Feeding Express server info it needs to be used
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//-- this MUST be above routes
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

const helpers = require('./utils/helpers');
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);

app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, './views/'));

app.get('/', (req, res, next) => {
  res.render('home', {layout: true});
});

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});