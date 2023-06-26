/*Create a `<button>`, when clicked becode rules are loaded with a `fetch('becode.json')`, 
then dynamically generate a `<ul>` list containing each rule in a `<li>`.*/

const button = document.querySelector("button");
const ul = document.querySelector("ul");

button.addEventListener("click", () => {
  fetch("becode.json")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        const li = document.createElement("li");
        li.innerText = element;
        ul.appendChild(li);
      });
    });
});
