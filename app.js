const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth-routes')
const profileRoute = require('./routes/profile-route')
const passportSetup = require('./config/passport-config');
const keys = require('./config/keys')
const cookieSession = require('cookie-session');
const passport = require('passport');


const app = express();


//set up view engine
app.set('view engine', 'ejs');

//set cookiessession
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}));

//init passport
app.use(passport.initialize());
app.use(passport.session());

//connect to database
mongoose.connect(keys.mongodb.dbURI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log('CONNECTED TO DB');
});
//set user for all routes
// app.use((req, res, next) => {

// });

// setup routes
app.use('/auth', authRoutes);
app.use('/profile', profileRoute);



app.get('/', (req, res) => {
  res.render('home', { user: req.user })
})

app.listen(3000, () => {
  console.log('App listening on port 3000')
})