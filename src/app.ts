import express from "express";
import "express-async-errors";

import { validationErrorMiddleware } from "./lib/middleware/validation";

import { initCorsMiddleware } from "./lib/middleware/cors";

import planetRoutes from "./routes/planets";

const app = express();

app.use(express.json());

app.use(initCorsMiddleware());

//La seguente è la middleware che monta le routes sotto l'indirizzo /planets
app.use("/planets", planetRoutes);

//La seguente è la middleware che gestisce gli errori!!
app.use(validationErrorMiddleware);

export default app;
