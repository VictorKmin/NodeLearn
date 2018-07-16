let passport = require('passport');
let localStrategy = require('passport-local').Strategy;
let modelUser = require('../models/User');


passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.serializeUser(function (id, done) {
    modelUser.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use('localSignUp',new localStrategy({
    usernameField : 'login',
    passwordField : 'pass'
}, function (login, password, done) {
    modelUser.find({login : login}, function (err, doc) {
        if (err) {
            done(err)
        } else if (doc) {
            done(null , doc)
        } else {
            let newUser = new modelUser({});
            newUser.login = login;
            newUser.password = pass;
            newUser.seve(function (err, doc) {
                if (err){
                    done(err)
                } else {
                    done(null, doc)
                }
            })
        }
    });
}));