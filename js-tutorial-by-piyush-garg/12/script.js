// Query Selector

/*

selectors in css
tag name
. class
# id 

*/

// const div = document.querySelector("div");

// div.innerHTML = "<h1>Hacked!!</h1>";

const code = document.querySelector("#username");

code.innerText = "John Doe";

const element = document.querySelectorAll(".block");
element.forEach((e) => {
  console.log(e.innerHTML);
});
