import express from "express";
import routes from "./routes";
import "./database";

class App {
    constructor() {
        this.server = express();
        this.middleware();
        this.routes();
    }

    middleware() {
        this.server.use(express.json());
        this.server.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");

            res.header(
                "Access-Control-Allow-Methods",
                "Origin, X-Requested-With, Content-Type, Accept"
            );

            next();
        });
    }

    routes() {
        this.server.use(routes);
    }
}

// export default new App().server;
module.exports = new App().server;