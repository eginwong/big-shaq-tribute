const fs = require("fs");

// load files from sounds folder
module.exports = (() => {
  return new Promise((resolve, reject) => {
    fs.readdir("sounds", (e, files) => {
      if (e) {
        return reject("ERROR : " + err);
      }
      return resolve(files);
    });
  });
})();
