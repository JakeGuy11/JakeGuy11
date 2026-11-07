//let backgroundNumber = sessionStorage.getItem("backgroundNumber");
let backgroundNumber = 6

if (!backgroundNumber) {
    backgroundNumber = Math.floor(Math.random() * 7) + 1;
    sessionStorage.setItem("backgroundNumber", backgroundNumber);
}

document.documentElement.style.setProperty(
    "--background-image",
    `url("src/background_${backgroundNumber}.png")`
);