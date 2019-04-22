const express = require('express');
const router = express.Router();
const path = require('path');
const passport = require('passport');
// const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');


// Dashboard

router.get('/profile', (req, res, next) => {
    //res.sendFile(path.resolve(__dirname + '/../../client/register.html'));
    res.render('profile');
});

router.get('/signup', (req, res, next) => {
    res.sendFile('signup');
});

router.get('/signin', (req, res, next) => {
    console.log("signin");

    res.sendFile('/../../client/profile.html');
});

router.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    passReqToCallback: false
}));


router.post('/signin', passport.authenticate('local-signin', {
    successRedirect: '/',
    failureRedirect: '/signin',
    passReqToCallback: true
    }), (req, res) => {
        const user = req.user;
        console.log('User', user);
        if(user.isAdmin != undefined && user.isAdmin == true) {
            console.log('User is an admin');
            res.redirect('/');
        }
        else {
            console.log('Regular user');
            res.redirect('/');
        }
    }
);


module.exports = router;