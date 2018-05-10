//Dependencies
let multer = require("multer");
let storage = multer.memoryStorage();
let upload = multer({ storage: storage });
let axios = require("axios");
let credentials = require("../../config.js");

let middleware = require('./middleware.js');

module.exports = function(app) {
  app.get("/create", function(req, res) {
    res.render("create");
  });

  app.post("/create/upload", upload.single("avatar"), function(req, res) {
    let image = req.file.buffer.toString("base64");
    axios({
      method: "post",
      url: "https://api.imgur.com/3/image",
      data: {
        image: image,
        album: "y6Y7amj",
        type: "base64"
      },
      headers: {
        Authorization: credentials.imgur.clientId,
        Authorization: credentials.imgur.Bearer
      }
    })
      .then(packet => {
        let url = packet.data.data.link;
        res.send({ link: url });
      })
      .catch(error => console.log(error));
  });
};
