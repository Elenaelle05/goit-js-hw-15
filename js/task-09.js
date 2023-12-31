
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const buttonRef = document.querySelector(".change-color");
const spanRef = document.querySelector(".color");
const bodyRef = document.querySelector("body");

const handleChange = (e) => {
  const randomColor = getRandomHexColor()
  bodyRef.style.backgroundColor = randomColor; 
  spanRef.textContent = randomColor;
};

buttonRef.addEventListener("click", handleChange);
