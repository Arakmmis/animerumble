requirejs.config({
  appDir: ".",
  baseUrl: "script/lib",
  paths: {
    /* Load jquery from google cdn. On fail, load local file. */
    vue: ["//unpkg.com/vue"],
    /* Load bootstrap from cdn. On fail, load local file. */
    socketio: [
      "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.4/socket.io.js"
    ],
    app: "../app"
  },
  shim: {
    socketio: {
      exports: "io"
    }
  }
});

require(["app/main"]);
