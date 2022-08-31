import passport from "passport";
import passportGitHub2 from "passport-github2";

const githubStrategy = new passportGitHub2.Strategy(
    {
        clientID: "",
        clientSecret: "",
        callbackURL: "",
    },
    function (
        accesToken: string,
        refreshToken: string,
        profile: { [key: string]: string },
        done: (error: null, user: Express.User) => void
    ) {
        const user: Express.User = {
            username: profile.username,
        };

        done(null, user);
    }
);

passport.use(githubStrategy);

//PER SAPERE CHI SIA LOGGATO E STORARNE I DATI NELLA SESSION

passport.serializeUser<Express.User>((user, done) => done(null, user));

//PER RECUPERARE I DATI DI CHI SI è LOGGATO

passport.deserializeUser<Express.User>((user, done) => done(null, user));

export { passport };
