var gulp = require("gulp");
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");

gulp.task("js-game", function() {
  function task() {
    let source = [
      "script/game/setup.js",
      "script/game/vue.js",
      "script/game/management.js",
      "script/game/renderer.js",
      "script/game/general.js",
      "script/game/socket.js",
      "script/game/helper.js",
      "script/game/*.js"
    ];

    return gulp
      .src(source)
      .pipe(sourcemaps.init())
      .pipe(concat("game.min.js"))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("public/build"));
  }
  task();
  let watcher = gulp.watch("script/*.js");
  watcher.on("change", function(path, stats) {
    console.log("File " + path + " was changed");
    task()
  });

  watcher.on("unlink", function(path) {
    console.log("File " + path + " was removed");
  });
});

gulp.task("default", ["js-game"]);
