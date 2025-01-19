// const passport = require('passport');
// const JWTStrategy = require('passport-jwt').Strategy;
// const ExtractJWT = require('passport-jwt').ExtractJwt;

// const User = require('../models/user');


// let opts = {
//     jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
//     secretOrKey: 'codeial'
// }


// passport.use(new JWTStrategy(opts, function(jwtPayLoad, done){

//     User.findById(jwtPayLoad._id, function(err, user){
//         if (err){console.log('Error in finding user from JWT'); return;}

//         if (user){
//             return done(null, user);
//         }else{
//             return done(null, false);
//         }
//     })

// }));

// module.exports = passport;


const passport = require('passport');
const JWTStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;

const User = require('../models/user');

let opts = {
    jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
    secretOrKey: 'codeial'
}

passport.use(
    new JWTStrategy(opts, async (jwtPayLoad, done) => {
        try {
            // Use async/await to find the user
            const user = await User.findById(jwtPayLoad._id);

            if (user) {
                return done(null, user);
            } else {
                return done(null, false); // No user found
            }
        } catch (err) {
            console.error('Error in finding user from JWT:', err);
            return done(err, false);
        }
    })
);

module.exports = passport;

