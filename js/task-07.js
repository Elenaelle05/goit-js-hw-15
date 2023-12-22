const nameInput= document.querySelector("#font-size-control")
const nameSpan = document.querySelector("#text")
console.log(nameInput);
const handleChange = (event) => {
  nameSpan.style.fontSize = event.target.value + "px"
}
nameInput.addEventListener("input", handleChange)