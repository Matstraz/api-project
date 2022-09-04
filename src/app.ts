import express from "express";
import "express-async-errors";

import { validationErrorMiddleware } from "./lib/middleware/validation";
import { initCorsMiddleware } from "./lib/middleware/cors";
import { initSessionMiddleware } from "./lib/middleware/session";
import { passport } from "./lib/middleware/passport";
import {
    notFoundMiddleware,
    initErrorMiddleware,
} from "./lib/middleware/error";

import planetRoutes from "./routes/planets";
import authRoutes from "./routes/auth";

const app = express();

app.use(initSessionMiddleware(app.get("env")));
app.use(passport.initialize()); //inizializza la nostra passport middleware, configurataaa per usare la github authentucation strategy
app.use(passport.session()); //gestisce il serializing/deserializing dei dati utente in un sessione(dopo il login dell'utente stesso)

app.use(express.json());

app.use(initCorsMiddleware());

//La seguente è la middleware che monta le routes sotto l'indirizzo /planets
app.use("/planets", planetRoutes);
app.use("/auth", authRoutes);
app.use(notFoundMiddleware);

//La seguente è la middleware che gestisce gli errori!!
app.use(validationErrorMiddleware);
app.use(initErrorMiddleware(app.get("env")));

export default app;
