// scripts.js
function startSimulation() {
    console.log("Simulation started.");
    appendLog("Simulation started.");
}

function stopSimulation() {
    console.log("Simulation stopped.");
    appendLog("Simulation stopped.");
}

function appendLog(message) {
    const logArea = document.querySelector('.logs');
    const newLogEntry = document.createElement('div');
    newLogEntry.textContent = message;
    logArea.appendChild(newLogEntry);
}
