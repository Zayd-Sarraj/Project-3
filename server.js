const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const passport = require('passport');
const session = require('express-session');
const multer = require('multer');

const app = express();

const PORT = process.env.PORT || 3001;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/gsn'; 

mongoose.Promise = global.Promise;

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(express.urlencoded({ limit: '10mb', extended: true, parameterLimit: 1000000 })); // Body Parser
app.use(express.json({limit : '10mb' }));


// Express Sesssion
app.use(session({
  secret: 'bluebear',
  resave: true,
  saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// Use Passport local strategy
require('./config/passport.js')(passport);

app.use(routes); // Routes

app.listen(PORT, function() {
	console.log(`App running on port ${PORT}`);
});
