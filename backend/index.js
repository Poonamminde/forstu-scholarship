const mongoose = require("mongoose");
const app = require("./app");
require("dotenv").config();

let server;
mongoose
  .connect(`${process.env.MONGODB_URL}`)
  .then(() => {
    console.log("Database Connection");
    server = app.listen(5000, () => console.log(`Server listening`));
  })
  .catch((error) => console.log(error));
