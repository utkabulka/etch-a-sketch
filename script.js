const sketchpadContainer = document.querySelector(".sketchpad");
const resetButton = document.querySelector("#reset-button");
const randomColorsButton = document.querySelector("#random-colors-button");

let gridSize = 16;

initSketchpad(false);

resetButton.onclick = () => initSketchpad(false);
randomColorsButton.onclick = () => initSketchpad(true);

function initSketchpad(randomColor = false) {
  sketchpadContainer.textContent = "";

  sketchpadContainer.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;
  sketchpadContainer.style.gridTemplateRows = `repeat(${gridSize}, 1fr)`;

  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      let newPixel = document.createElement("div");
      newPixel.className = "pixel";

      if (randomColor) {
        newPixel.style.backgroundColor =
          "#" + Math.floor(Math.random() * 16777215).toString(16);
      }

      sketchpadContainer.appendChild(newPixel);
    }
  }
}
