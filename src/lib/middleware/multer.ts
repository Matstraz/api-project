import multer from "multer";

const storage = multer.diskStorage({
    destination: "uploads/",
});

export const multerOptions = {};

//la seguente funzione ritorna un'istanza della middleware MULTER
export const initMulterMiddleware = () => {
    return multer({ storage, ...multerOptions });
};
