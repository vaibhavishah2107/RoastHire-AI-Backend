const express = require("express");
const cors = require("cors");
const app = express();
const health = require("./routes/health.routes");
const router = require("./routes/auth.routes");
app.use(express.json());
app.use(cors());
app.use(router);
module.exports = app;