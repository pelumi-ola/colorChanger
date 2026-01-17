document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM fully loaded and parsed");

  const colorBox = document.getElementById("color-box");
  const colorBtn = document.getElementById("change-color-btn");

  function getRandomColor() {
    const randomColor = Math.floor(Math.random() * 16777215);
    let hexColor = randomColor.toString(16).padStart(6, "0");
    return `#${hexColor.toUpperCase()}`;
  }

  function changeColor() {
    const newColor = getRandomColor();
    colorBox.style.background = newColor;
    console.log("color change:", newColor);
  }

  colorBtn.addEventListener("click", changeColor);
});
