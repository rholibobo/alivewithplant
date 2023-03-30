const express = require("express");
const functions = require('firebase-functions');
const app = express();
const port = process.env.PORT || 3500;
const HomePage = require("./routes/home")
const ContactUs = require("./routes/contact")
const AboutUs = require("./routes/about")
const Gallery = require("./routes/gallery")
const Suggestions = require("./routes/suggestions")

const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.set('views', './views');
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use("/public/imgs", express.static("./public/imgs"));
app.use(connectLiveReload());

app.use(HomePage)
app.use(ContactUs)
app.use(AboutUs)
app.use(Gallery)
// app.use(Suggestions)

app.listen(port, () => {
  console.log(`listening on ${port}`);
});

exports.app = functions.https.onRequest(app);
