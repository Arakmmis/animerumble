let middleware = require('./middleware.js');
let auth = require("../controllers/AuthController.js");

module.exports = function(app) {
  // restrict index for logged in user only
  app.get("/links", auth.home);

  // route to register page
  app.get("/register", auth.register);

  // route for register action
  app.post("/register", auth.doRegister);

  // route to login page
  app.get("/login", auth.login);

  // route for login action
  app.post("/login", auth.doLogin);

  // route for logout action
  app.get("/logout", middleware.isLoggedIn, auth.logout);
};
