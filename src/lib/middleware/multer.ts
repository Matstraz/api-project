import multer from "multer";

export const multerOptins = {};

//la seguente funzione ritorna un'istanza della middleware MULTER
export const initMulterMiddleware = () => {
    return multer(multerOptins);
};
