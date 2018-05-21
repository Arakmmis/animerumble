function getParameterName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

let url = window.location.href.split("/");
let room = url[url.length - 1];

app.$http.get("/replay/history/" + room).then(function(response) {
  console.log(response);
  if (response.status == "200") {
    let body = response.body[0];
    app.log = body.log;
    vueBind(body.log[0]);
  }
});
