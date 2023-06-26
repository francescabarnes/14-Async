/* Make a new page with a text input and a button. 
When the button is clicked, a fetch query is sent to the [agify API](https://agify.io/) with the name entered in the input. 
When the request is finished display the result in a new div on the page. 
Keep the the past requests on the page by creating a new div each time you make an API call. 
Also add a <select> field with a few countries in it, to narrow down the search to a specific country. 
You'll have to look in agify documentation to know more about that.
*/

const input = document.querySelector("input");
const button = document.querySelector("button");
const select = document.querySelector("select");
const div = document.querySelector("div");

button.addEventListener("click", () => {
  fetch(`https://api.agify.io/?name=${input.value}&country_id=${select.value}`)
    .then((response) => response.json())
    .then((data) => {
      const newDiv = document.createElement("div");
      newDiv.textContent = `I predict that ${data.name} is ${data.age} years old from ${data.country_id}`;
      div.appendChild(newDiv);
      localStorage.setItem("name", data.name);
      localStorage.setItem("age", data.age);
      localStorage.setItem("country_id", data.country_id);
    });
});

// Now store in localStorage the name and age of the user.
