const button = document.getElementById("buttonClicked");
const container = document.getElementById("myContainer");

button.addEventListener("click", () => {
  const element = document.createElement("h1");
  element.innerText = "Hashir Sajid";
  container.appendChild(element);
});
