import JwtPassport from "passport-jwt";
import { Passport } from "passport/lib";
import { UserModel } from "../database/user";


const JWTStrategy = JwtPassport.Strategy;
const ExtractJwt = JwtPassport.ExtractJwt;

const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: "zomato",
};
export default (passport) => {
    passport.use(new JWTStrategy(options, async(jwt__payload, done) => {
        try {
            const doesUserExist = UserModel.findById(jwt__payload.user);
            if (!doesUserExist) return done(null, false);
        } catch (error) {
            throw new Error(error);
        }
    })
);
};