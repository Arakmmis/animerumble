socket.on("apply", payload => {
  document.title = "(!) Anime Rumble";
  vueBind(payload);
});

socket.on("noMatch", payload => {
  console.log("none");
  window.location.replace("/");
});

socket.on("chat", payload => {
  app.chat.push(payload);

  var container = app.$el.querySelector("#chatbox");
  container.scrollTop = container.scrollHeight;
});
