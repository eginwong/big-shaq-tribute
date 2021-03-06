const express = require("express");
const cache = require("./cache-loader");
const app = express();

app.use(express.static("./public"));

// initialization of cache
let songCache = null;
cache.then(x => {
  songCache = x;
});

app.get("/api/sound", (req, res) => {
  // https://stackoverflow.com/questions/5915096/get-random-item-from-javascript-array
  const num = Math.floor(Math.random() * songCache.length);
  const randomSong = songCache[num];
  res.sendFile("sounds/" + randomSong, { root: __dirname });
});

// catch all for random paths entered by the users
app.get("*", function(req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function() {
  console.log(
    "Express server listening on port %d in %s mode",
    this.address().port,
    app.settings.env
  );
});
