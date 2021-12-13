// const express = require("express");
// const path = require("path");

// const app = express();

// // Serve only the static files form the dist directory
// app.use(express.static("./dist"));

// app.get("/*", (req, res) =>
//   res.sendFile("index.html", {
//     root: "dist",
//   })
// );

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 4300);
const express = require("express");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 80;

// Serve only the static files form the dist directory
app.use(express.static(path.join(__dirname, "dist")));

app.get("/*", (req, res) =>
  res.sendFile(path.join(__dirname, "dist/en-US/index.html"))
);

// Start the app by listening on the default Heroku port
app.listen(PORT, () => {
  console.log(`Listening on PORT: ${PORT}`);
});
