const sketchpadContainer = document.querySelector(".sketchpad");
const resetButton = document.querySelector("#reset-button");
const randomColorsButton = document.querySelector("#random-colors-button");

let gridSize = 16;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

initSketchpad(false);

resetButton.onclick = () => initSketchpad(false);
randomColorsButton.onclick = () => initSketchpad(true);

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function initSketchpad(randomColor = false) {
  sketchpadContainer.textContent = "";

  sketchpadContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  sketchpadContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let newPixel = document.createElement("div");
      newPixel.className = "pixel";

      newPixel.addEventListener("mouseover", handleMouse);

      if (randomColor) {
        newPixel.style.backgroundColor = getRandomColor();
      }

      sketchpadContainer.appendChild(newPixel);
    }
  }
}

function handleMouse(e) {
  if (mouseDown) {
    e.target.style.backgroundColor = getRandomColor();
  }
}
