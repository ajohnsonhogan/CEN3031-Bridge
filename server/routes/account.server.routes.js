const express = require('express');
const router = express.Router();
const path = require('path')

const passport = require('passport');

router.get('/signup', (req, res, next) => {
    res.sendFile(__dirname + '/../../client/register.html');
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/../../client/profile.html',
    failureRedirect: '/signup',
    passReqToCallback: true
}));

router.get('/signin', (req, res, next) => {
    res.sendFile(__dirname + '/../../client/profile.html');
});

router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/../../client/profile.html',
    failureRedirect: '/signin',
    passReqToCallback: true
}));

router.get('/profile', (req, res, next) => {
    res.render('profile');
});

//function isAuthenticated(req, res, next) {
    //if(req.isAuthenticated()) {
      //  return next();
   // }
    //res.redirect('/');
//};


module.exports = router;