import express from "express";
import "express-async-errors";

import prisma from "./lib/prisma/client";

import {
    validate,
    planetSchema,
    PlanetData,
    validationErrorMiddleware,
} from "./lib/validation";

const app = express();

app.use(express.json());

app.get("/planets/:id(\\d+)", async (request, response, next) => {
    const planetId = Number(request.params.id);

    const planet = await prisma.planet.findUnique({
        where: { id: planetId },
    });

    if (!planet) {
        response.status(404);
        return next(`Cannot GET /planet/${planetId}`);
    }

    response.json(planet);
});

app.get("/planets", async (request, response) => {
    const planets = await prisma.planet.findMany();

    response.json(planets);
});

app.post(
    "/planets",
    validate({ body: planetSchema }),
    async (request, response) => {
        const planetData: PlanetData = request.body;

        const planet = await prisma.planet.create({
            data: planetData,
        });

        response.status(201).json(planet);
    }
);

app.use(validationErrorMiddleware);

export default app;
