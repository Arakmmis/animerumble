socket.on("apply", payload => {
  document.title = "(!) Anime Rumble";
  vueBind(payload);
});

socket.on("noMatch", payload => {
  console.log("none");
  window.location.replace("/");
});

chat.on("chat", payload => {
  console.log(payload);
  if (payload.channel === "ingame") {
    app.chat.push(payload.message);
    if (app.chatChannel !== "ingame") {
      app.chatNotif.ingame = true;
    } else {
      scrollChat();
    }
  } else if (payload.channel === "lobby") {
    app.lobbychat.push(payload.message);

    if (app.chatChannel !== "lobby") {
      app.chatNotif.lobby = true;
    } else {
      scrollChat();
    }
  }
});

chat.on("gameInitiate", payload => {
  app.chat = payload;
  setTimeout(() => {
    scrollChat();
  }, 100);
});
chat.on("lobbyInitiate", payload => {
  app.lobbychat = payload;
});

//Handle Disconnect
socket.on("onDisconnect", payload => {
  let message = {
    name: "System",
    message: payload.username + " disconnected. Has 30 seconds to reconnect.",
    timestamp: Date.now()
  };
  app.chat.push(message);
});
