let container = document.querySelector(".form-container");
let form = document.querySelector("form");
let ordersList = [];

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(e) {
  e.preventDefault();

  const data = new FormData(form);
  const dataObj = Object.fromEntries(data.entries());

  let name = dataObj.name;
  console.log("Name", name);

  let email = dataObj.email;
  console.log("Email", email);

  let password = dataObj.password;
  console.log("Password", password);

  let message = `Welcome ${name}! You are logged in!`;
  console.log("message:", message);

  let messagePara = document.createElement("p");
  messagePara.textContent = message;
  container.appendChild(messagePara);
  console.log("our data:", dataObj);
  form.reset();
}
