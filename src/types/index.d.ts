//DEFINIAMO UN TIPO PER EXPRESS.USER (DI DEFAULT è UN OGGETTO VUOTO)

declare global {
    namespace Express {
        interface User {
            username: string;
        }
    }
}

export {};
