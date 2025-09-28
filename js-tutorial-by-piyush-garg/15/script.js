const clicked = document.getElementById("buttonClicked");
const changeColor = document.getElementById("colorChange");
clicked.addEventListener("click", () => {
  if (changeColor.style.color === "red") {
    changeColor.style.color = "blue";
  } else {
    changeColor.style.color = "red";
  }
});

const allChildren = document.querySelector("body").children;
for (let i = 0; i < allChildren.length; i++) {
  allChildren.item(i).addEventListener("click", () => {
    allChildren.item(i).remove();
  });
}
