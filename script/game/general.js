function initiate() {
  let url = window.location.href.split("/");
  let room = url[url.length - 1];
  if (room !== "") {
    socket.emit("initiate", {
      room: room
    });
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
    app.state.timer.turn -= 3.3;
  } else if (app.state.timer.turn <= 0 && app.source.myTurn === true) {
    // app.packet = app.packet.filter(x => x.skill !== null && x.offense !== '' && x.target !== '' && x.aim !== '' && x.heroIndex !== null)
    // socket.emit('sequence', {
    //     packet: app.packet,
    //     room: app.source.room
    // })
    // app.packet = []
  }
}, 1000);

window.onfocus = function() {
  document.title = "Anime Rumble";
};
