const express = require("express");
const home = require("./routes/home.js");

const app = express();
app.use(express.json());

app.use("/home", home);

const port = process.env.PORT || 3050;
app.listen(port, () => console.log(`Listening to port ${port}`));
