import fs from "fs";
import https from "https";
import app from "./app";

require("dotenv/config");

const server = https.createServer(
  {
    key: fs.readFileSync(`${__dirname}/../cert/localhost-key.pem`, "utf8"),
    cert: fs.readFileSync(`${__dirname}/../cert/localhost.pem`, "utf8"),
  },
  app
);

server.listen(process.env.PORT);