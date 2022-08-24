import app from "./app";

const port = 3000;

app.listen(3000, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
