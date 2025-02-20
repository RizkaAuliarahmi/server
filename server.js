const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const port = process.env.PORT || 5000;

app.use(cors());

app.use(require("./routes/record"));
app.use(require("./routes/admin"));
app.use(require("./routes/driver"));
app.use(require("./routes/customer"));
app.use(require("./routes/auth"));

// get driver connection
const dbo = require("./db/conn");

app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
 
  });
  console.log(`Server is running on port: ${port}`);
});