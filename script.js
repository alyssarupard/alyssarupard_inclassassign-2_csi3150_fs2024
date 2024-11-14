function revealInfo(letter) {
  document.getElementById(`info${letter}`).classList.add("show");
}

function hideInfo(letter) {
  document.getElementById(`info${letter}`).classList.remove("show");
}
