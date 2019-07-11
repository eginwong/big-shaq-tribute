function toggleLyricsDropdown() {
  toggleLyricsDisplay();
}

function toggleLyricsDisplay() {
  const x = document.getElementsByClassName("content-section--lyrics")[0];
  x.style.display = x.style.display === "none" ? "block" : "none";
}

function playSound() {
  const elt = document.getElementById("sound");
  // required for cache-busting
  elt.setAttribute("src", "api/sound?cb=" + new Date().getTime());
  elt.play();
}
