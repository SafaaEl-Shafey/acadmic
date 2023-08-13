let timeout = document.getElementById("timeout");
let house_of_games = document.getElementById("house_of_games");

function none() {
  timeout.style.display = "none";
  house_of_games.style.display = "block";
}

setTimeout(none, 4000);

function reload() {
  location.reload();
}
