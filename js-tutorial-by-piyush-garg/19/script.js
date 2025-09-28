const clickButton = document.getElementById("buttonClicked");
const userNameInput = document.getElementById("usernameInput");
const userName = document.getElementById("username");

clickButton.addEventListener("click", () => {
  const value = userNameInput.value;
  localStorage.setItem("name", value);
  location.reload();
});

window.addEventListener("load", () => {
  const value = localStorage.getItem("name");
  userName.innerText = value;
});
