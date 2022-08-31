import express from "express";
import "express-async-errors";
import cors from "cors";

import { validationErrorMiddleware } from "./lib/validation";

import planetRoutes from "./routes/planets";

const corsOptions = {
    origin: "http://localhost:8080",
};

const app = express();

app.use(express.json());

app.use(cors(corsOptions));

//La seguente è la middleware che monta le routes sotto l'indirizzo /planets
app.use("/planets", planetRoutes);

//La seguente è la middleware che gestisce gli errori!!
app.use(validationErrorMiddleware);

export default app;
