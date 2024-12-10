const savedValueDisplay = document.getElementById("savedValue");
const nameInput = document.getElementById("nameInput");
const saveButton = document.getElementById("saveButton");
const removeButton = document.getElementById("removeButton");
const counterDisplay = document.getElementById("counter");

function updateSavedValueDisplay() {
    const savedValue = localStorage.getItem("userName");
    savedValueDisplay.textContent = savedValue ? savedValue : "Nessun valore salvato.";
}

function saveName() {
    const name = nameInput.value;
    if (name) {
        localStorage.setItem("userName", name);
        updateSavedValueDisplay();
        nameInput.value = "";
    }
}

function removeName() {
    localStorage.removeItem("userName");
    updateSavedValueDisplay();
}

updateSavedValueDisplay();

saveButton.addEventListener("click", saveName);
removeButton.addEventListener("click", removeName);

let counter = sessionStorage.getItem("counter") || 0;

function updateCounter() {
    counter++;
    counterDisplay.textContent = counter;
    sessionStorage.setItem("counter", counter);
}

setInterval(updateCounter, 1000);
