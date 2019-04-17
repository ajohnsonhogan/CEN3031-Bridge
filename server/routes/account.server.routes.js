const express = require('express');
const router = express.Router();
const path = require('path');

const passport = require('passport');

router.get('/profile', (req, res, next) => {
    //res.sendFile(path.resolve(__dirname + '/../../client/register.html'));
    res.render('profile');
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: false
}));

router.get('/signin', (req, res, next) => {
    console.log("signin");

    res.sendFile('/../../client/profile.html');
});

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: 'profile',
    failureRedirect: '/signin',
    passReqToCallback: true
}));

router.get('/signup', (req, res, next) => {
    res.sendFile('signup');
});



function isAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
      return next();
   }
    res.redirect('/');
};


module.exports = router;