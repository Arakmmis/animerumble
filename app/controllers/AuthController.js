let mongoose = require("mongoose");
let passport = require("passport");
let User = require("../models/User.js");

let userController = {};

// Restrict access to root page
userController.home = function(req, res) {
  res.render("links", { user: req.user });
};

// Go to registration page
userController.register = function(req, res) {
  res.render("register");
};

// Post registration
userController.doRegister = function(req, res) {
  if (req.body.username === "" || req.body.password === "") {
    res.redirect("/?err=register");
    return;
  }
  
  User.register(
    new User({
      username: req.body.username,
      name: req.body.name,
      email: req.body.email
    }),
    req.body.password,
    function(err, user) {
      if (err) {
        console.log(err);
        // return res.render("register", { user: user });
        res.redirect("/?err=register");
      }

      passport.authenticate("local")(req, res, function() {
        res.redirect("/");
      });
    }
  );
};

// Go to login page
userController.login = function(req, res) {
  res.redirect("/");
};

// Post login
userController.doLogin = function(req, res) {
  console.log("login");
  passport.authenticate("local")(req, res, function() {
    if (err) {
      return next(err);
    }
    if (!user) {
      console.log("not found");
      return res.redirect("/");
    }
    req.logIn(user, function(err) {
      if (err) {
        return next(err);
      }
      console.log("success");
      return res.redirect("/");
    });
  });
};

// logout
userController.logout = function(req, res) {
  console.log("logout");
  req.logout();
  res.redirect("/");
};

module.exports = userController;
