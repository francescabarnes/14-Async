/* Make a new page with a text input and a button. 
When the button is clicked, a fetch query is sent to the [agify API](https://agify.io/) with the name entered in the input. 
When the request is finished display the result in a new div on the page. 
Keep the the past requests on the page by creating a new div each time you make an API call. */

const input = document.querySelector("input");
const button = document.querySelector("button");
const div = document.querySelector("div");

button.addEventListener("click", () => {
  fetch(`https://api.agify.io/?name=${input.value}`)
    .then((response) => response.json())
    .then((data) => {
      const newDiv = document.createElement("div");
      newDiv.textContent = `${data.name} is ${data.age} years old`;
      div.appendChild(newDiv);
    });
});
