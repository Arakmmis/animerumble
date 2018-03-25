define(["socketio", "vue"], function(socketio, vue) {
  var socket = io();

  let app = new Vue({
    el: "#app",
    data: {
      seen: false,
      username: "",
      players: [],
      challenge: {
        seen: false,
        challenger: ""
      }
    },
    methods: {
      login: function(payload) {
        console.log(this.username);
        socket.emit("log", {
          name: this.username
        });
      },
      onChallenge: function(payload) {
        socket.emit("challenge", {
          from: this.username,
          to: payload
        });
      }
    }
  });

  const setCookie = (name, value, days = 7, path = "/") => {
    const expires = new Date(Date.now() + days * 864e5).toGMTString();
    document.cookie =
      name +
      "=" +
      encodeURIComponent(value) +
      "; expires=" +
      expires +
      "; path=" +
      path;
  };

  const getCookie = name => {
    return document.cookie.split("; ").reduce((r, v) => {
      const parts = v.split("=");
      return parts[0] === name ? decodeURIComponent(parts[1]) : r;
    }, "");
  };

  const deleteCookie = (name, path) => {
    setCookie(name, "", -1, path);
  };

  let token = getCookie("token");
  socket.emit("connectLobby", {
    token: token
  });
  socket.on("logged", payload => {
    app.seen = true;
    app.username = payload.user;
    console.log("logged in");
    setCookie("token", payload.token);
  });
  socket.on("exist", payload => {
    console.log("exist");
  });

  socket.on("challenge", payload => {
    app.challenge.seen = true;
    app.challenge.challenger = payload;
  });

  socket.on("users", payload => {
    console.log("test");
    app.players = payload;
  });
});
