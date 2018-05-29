let room = getRoomName();
let socket = io("/game?room=" + room);
let chat = io("/chat");
