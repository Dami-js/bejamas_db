const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults();
require("dotenv").config();

const PORT = process.env.PORT;

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
server.use(router);
server.listen(PORT, () => {
  console.log("JSON Server is running");
});
