import { RequestHandler } from "express";

jest.mock("./passport", () => {
    const originalModule = jest.requireActual("./passport");

    const checkAuthorization: RequestHandler = (
        //Controllerà se qualcuno è loggato in una SESSIONE VALIDA
        request,
        response,
        next
    ) => {
        next();
    };

    return {
        __esModule: true,
        ...originalModule,
        checkAuthorization,
    };
});
