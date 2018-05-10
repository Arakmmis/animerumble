module.exports.isLoggedIn = function(req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.username = req.user.username;
    res.locals.email = req.user.email;
    res.locals.name = req.user.name;
    res.locals.loggedIn = true;

    return next();
  } else {
    var redirectTo = "";
    if (req.method == "GET") {
      redirectTo = req.originalUrl;
    }
    req.session.redirectTo = redirectTo;
    res.redirect("/");
  }
};

module.exports.isGuest = function(req, res, next) {
  if (!req.isAuthenticated()) {
    res.locals.loggedIn = false;
    return next();
  }

  res.redirect("/landing");
};

module.exports.isBoth = function(req, res, next) {
  if (req.isAuthenticated()) {
    res.locals.username = req.user.username;
    res.locals.email = req.user.email;
    res.locals.name = req.user.name;
    res.locals.loggedIn = true;

    return next();
  } else {
    res.locals.loggedIn = false;

    return next();
  }
};
