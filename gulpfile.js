var gulp = require("gulp");
var concat = require("gulp-concat");
var sourcemaps = require("gulp-sourcemaps");
var nodemon = require("gulp-nodemon");
const babel = require("gulp-babel");

gulp.task("start", function() {
  nodemon({
    script: "index.js",
    ext: "js json",
    ignore: ["script/", "public/", "node_modules/"],
    env: { NODE_ENV: "development" },
    exec: "node-inspector & node --inspect"
  });
});

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
      .pipe(
        babel({
          presets: ["@babel/env"]
        })
      )
      .pipe(concat("game.min.js"))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest("public/build"));
  }
  task();
  let watcher = gulp.watch("script/game/*.js");
  watcher.on("change", function(path, stats) {
    console.log("File " + path + " was changed");
    task();
  });

  watcher.on("unlink", function(path) {
    console.log("File " + path + " was removed");
  });
});

gulp.task("default", ["start", "js-game"]);
