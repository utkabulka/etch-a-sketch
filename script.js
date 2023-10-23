const sketchpadContainer = document.querySelector(".sketchpad");
const resetButton = document.querySelector("#reset-button");
const randomColorsButton = document.querySelector("#random-colors-button");
const drawButton = document.querySelector("#draw-button");
const eraserButton = document.querySelector("#eraser-button");

let gridSize = 16;

let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let erasing = false;
let selectedColor = "#000000";

initSketchpad(false);

resetButton.onclick = () => initSketchpad(false);
randomColorsButton.onclick = () => initSketchpad(true);

drawButton.onclick = () => {
  erasing = false;
};
eraserButton.onclick = () => {
  erasing = true;
};

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
      newPixel.addEventListener("mousedown", handleMouse);

      if (randomColor) {
        newPixel.style.backgroundColor = getRandomColor();
      }

      sketchpadContainer.appendChild(newPixel);
    }
  }
}

function handleMouse(e) {
  if (e.type == "mouseover" && !mouseDown) return;

  if (erasing) {
    e.target.style.backgroundColor = "#ffffff";
  } else {
    e.target.style.backgroundColor = selectedColor;
  }
}
