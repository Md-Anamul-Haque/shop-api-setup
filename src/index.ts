import app from "./app";
import app_config from "./config";
const port = app_config.PORT
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})