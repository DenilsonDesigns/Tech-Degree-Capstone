const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");
const authRoutes = require("./routes/authRoutes");
const apiRoutes = require("./routes/apiRoutes");

mongoose.connect(
  keys.mongoURI,
  { useNewUrlParser: true }
);

const app = express();
app.use(
  cookieSession({
    //hook up dem users with 30 days worth of cookies bruh
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);
app.use(passport.initialize());
app.use(passport.session());
apiRoutes(app);
authRoutes(app);

if (process.env.NODE_ENV === "production") {
  //Express will serve up production assets
  app.use(express.static("client/build"));
  //Express will serve index.html if route unrecognized
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Listening on PORT:${PORT}`);
});
