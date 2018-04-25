socket.on("apply", payload => {
  document.title = "(!) Anime Rumble";
  vueBind(payload);
});

socket.on("noMatch", payload => {
  console.log("none");
  window.location.replace("/");
});
