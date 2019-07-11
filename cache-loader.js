const fs = require("fs");

// load files from sounds folder
module.exports = fs.readdirSync("sounds", (e, files) => files);
