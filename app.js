setInterval(() => {
  const now = new Date();
  const timeStr = now.toLocaleTimeString("he-IL", { hour: '2-digit', minute: '2-digit' });
  const clockElement = document.getElementById("clock");
  if (clockElement) {
    clockElement.innerHTML = `שעה: <span class="value">${timeStr}</span>`;
  }
}, 1000);

window.addEventListener("message", (event) => {
  const data = event.data;
  const mainContainer = document.querySelector(".main-container");

  if (data.action === "updateData") {
    const playerIdElement = document.getElementById("player-id");
    const playerCountElement = document.getElementById("player-count");

    if (playerIdElement) {
      playerIdElement.innerHTML = `מזהה: <span class="value">${data.playerId}</span>`;
    }
    if (playerCountElement) {
      playerCountElement.innerHTML = `שחקנים: <span class="value">${data.playerCount}</span>`;
    }
    mainContainer.style.display = "flex";
  } else if (data.action === "hideUI") {
    mainContainer.style.display = "none";
  }
});