socket.on("apply", payload => {
  document.title = "(!) Anime Rumble";
  vueBind(payload);
});

socket.on("noMatch", payload => {
  console.log("none");
  window.location.replace("/");
});

chat.on("chat", payload => {
  if (payload.channel === "ingame") {
    app.chat.push(payload.message);
    if (app.chatChannel !== "ingame") {
      app.chatNotif.ingame = true;
    }
  } else if (payload.channel === "lobby") {
    app.lobbychat.push(payload.message);

    if (app.chatChannel !== "lobby") {
      app.chatNotif.lobby = true;
    }
  }
});

chat.on("gameInitiate", payload => {
  app.chat = payload;
});
chat.on("lobbyInitiate", payload => {
  app.lobbychat = payload;
});
