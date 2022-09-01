import passport from "passport";
import passportGitHub2 from "passport-github2";
import { RequestHandler } from "express";

import config from "../../config";

const githubStrategy = new passportGitHub2.Strategy(
    {
        clientID: config.GITHUB_CLIENT_ID,
        clientSecret: config.GITHUB_CLIENT_SECRET,
        callbackURL: config.GITHUB_CALLBACK_URL,
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

const checkAuthorization: RequestHandler = (
    //Controllerà se qualcuno è loggato in una SESSIONE VALIDA
    request,
    response,
    next
) => {
    if (request.isAuthenticated()) {
        //l'utente è autorizzato ad usare l'api route
        return next();
    }

    //l'utente NON è autorizzato ad usare l'api route
    response.status(401).end();
};

export { passport, checkAuthorization };
