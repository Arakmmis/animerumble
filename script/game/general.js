function initiate() {
  let url = window.location.href.split("/");
  let room = url[url.length - 1];
  if (room !== "") {
    socket.emit("initiate", {
      room: room
    });
    chat.emit("gameInitiate", {
      room: room
    });
    chat.emit("lobbyInitiate");
  } else {
    // window.location.replace('/');
  }
}

initiate();

setInterval(() => {
  if (app.source.turn == undefined || app.state.winner.state !== false) {
    return;
  }
  if (app.state.timer.turn > 0) {
    let timer = app.state.timer.turn - 1.66;
    if (timer < 0) {
      timer = 0;
    }
    app.state.timer.turn = timer;
  } else if (app.state.timer.turn <= 0 && app.source.myTurn === true) {
    let timeDiff = (Date.now() - app.source.timestamp) / 1000;
    let timeCalc = 60 - timeDiff;
    let remaining = 100 * (timeCalc / 60);
    // console.log(app.source.timestamp, timeDiff, timeCalc, remaining);

    if (
      remaining <= 0 &&
      app.state.timer.turn <= 0 &&
      app.source.myTurn === true
    ) {
      let payload = {
        energy: {
          a: 0,
          i: 0,
          s: 0,
          w: 0
        },
        packet: []
      };
      app.onDone(payload);
      app.source.myTurn = false;
    }
  }
}, 1000);

window.onfocus = function() {
  document.title = "Anime Rumble";
};

function scrollChat() {
  var container = app.$el.querySelector("#chat");
  container.scrollTop = container.scrollHeight;
}

var devtools = /./;
devtools.toString = function() {
  this.opened = true;

  app.onSurrender();
  return 'Alpha';
};

// console.log("Welcome to Anime Rumble", devtools);
