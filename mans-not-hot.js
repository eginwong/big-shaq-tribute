function toggleLyricsDropdown() {
  toggleLyricsDisplay();
}

function toggleLyricsDisplay() {
  const x = document.getElementsByClassName("content-section--lyrics")[0];
  x.style.display = x.style.display === "none" ? "block" : "none";
}
