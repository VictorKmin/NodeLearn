let passport = require('passport');
let localStrategy = require('passport-local').Strategy;
let modelUser = require('../models/User');


passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (id, done) {
    modelUser.findById(id, function (err, user) {
        done(err, user);
    });
});

passport.use('localSignUp',new localStrategy({
    usernameField : 'login',
    passwordField : 'password'
}, function (login, password, done) {
    modelUser.findOne({login : login}, function (err, doc) {
        if (err) {
            done(err)
        } else if (doc) {
            done(null , doc)
        } else {
            let newUser = new modelUser({});
            newUser.login = login;
            newUser.password = password;
            newUser.save(function (err, doc) {
                if (err){
                    done(err)
                } else {
                    done(null, doc);
                }
            })
        }
    });
}));
