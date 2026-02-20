let guestName = "";
let guestAvatar = "";

function switchScreen(current, next) {
  document.getElementById(current).classList.add("hidden");
  document.getElementById(next).classList.remove("hidden");
}

function goToAvatar() {
  guestName = document.getElementById("guestName").value;
  if (guestName.trim() === "") {
    alert("Enter your name 😌");
    return;
  }
  switchScreen("nameScreen", "avatarScreen");
}

function selectAvatar(type) {
  guestAvatar = type;
  switchScreen("avatarScreen", "doorScreen");
}

function enterHall() {
  document.getElementById("welcomeText").innerText =
    "Welcome " + guestName + " 🎉";
  switchScreen("doorScreen", "hallScreen");
}

function goToThankYou() {
  switchScreen("hallScreen", "thankYouScreen");
}
