const passport = require('passport')
const router = require('express').Router();

router.get('/login', (req, res) => {
  res.render('login', { user: req.user })
})

router.get('/logout', (req, res) => {
  req.logout()
  res.redirect('/');
})

router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}))

router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // req.user;
  // res.send(req.user)
  res.redirect('/profile')

})

module.exports = router