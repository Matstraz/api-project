import cors from "cors";

export function initCorsMiddleware() {
    const corsOptions = {
        origin: "http://localhost:8080",
    };
    //RITORNA UNA CORS MIDDLEWARE CHE USA LE OPZIONI DEFINITE IN corsOptions
    return cors(corsOptions);
}
