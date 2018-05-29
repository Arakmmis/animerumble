let room = getRoomName();
console.log(room);
let socket = io("/game?room=" + room);
let chat = io("/chat");
