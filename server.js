const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require("path");
const cors = require("cors");

const users = require("./routes/api/users");
const transactions = require("./routes/api/transactions");
const messages = require("./routes/api/messages");

const app = express();
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);
app.use(bodyParser.json());

const db = require("./config/keys").mongoURI;

mongoose
  .connect(
    "mongodb+srv://akash:akash123@mern-apps.dgtsqdb.mongodb.net/Bank_App?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5001))
  .then(() => console.log("Connected to DB"))
  .catch((err) => console.log(err));

app.use(passport.initialize());

require("./config/passport")(passport);

app.use("/api/users", users);
app.use("/api/transactions", transactions);
app.use("/api/messages", messages);

app.use(express.static(path.join(__dirname, "client", "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
