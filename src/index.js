const express = require("express");
const initWebRoutes = require("./routes/router");
const connectDB = require("./config/connectDB");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
const path = require("path");

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connectDB();

initWebRoutes(app);

//http logger
app.use(morgan("combined"));

//template engine
app.use(express.static(path.join(__dirname, "resources/public")));
app.use(express.static(path.join(__dirname, "resources")));

app.use("/img", express.static("img"));
app.engine("handlebars", handlebars());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "resources/views"));

app.listen(port, () => console.log(`app running at http://localhost:${port}`));
