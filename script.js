function setdarkmode(enabled) {
  document.body.classList.toggle("darkmode", enabled);
  localStorage.setItem("darkmode", enabled ? "enabled" : "disabled");

  document.querySelector(".darkbutton .material-symbols-outlined").textContent = enabled ? "toggle_on" : "toggle_off";
}

function darkmode() {
  setdarkmode(!document.body.classList.contains("darkmode"))
}

function loaddarkmode() {
  setdarkmode(localStorage.getItem("darkmode") === "enabled")
}

window.addEventListener("DOMContentLoaded", loaddarkmode)
