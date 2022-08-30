import { generatePhotoFIlename } from "./multer";

describe("generatePhotoFIlename", () => {
    test.each([
        ["image/png", "png"],
        ["image/jpeg", "jpeg"],
    ])(
        "Generates filename with correct extension when passed mimeType '%s",
        (mimeType, expectedFileExtension) => {
            const fullFilename = generatePhotoFIlename(mimeType);
            const [, fileExtension] = fullFilename.split(".");

            expect(fileExtension).toEqual(expectedFileExtension);
        }
    );
});
