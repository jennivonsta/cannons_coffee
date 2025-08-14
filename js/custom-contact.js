let container = document.querySelector(".container");
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

  let phone = dataObj.phone;
  console.log("Phone", phone);

  let comments = dataObj.comments;
  console.log("Comments", comments);

  let faveCoffee = dataObj.faveCoffee;
  console.log("Fave Coffee", faveCoffee);

  let interest = dataObj.interest;
  console.log("Interest", interest);

  let message = `Thank you ${name}! We appreciate your interest in ${interest}. Your favorite coffee flavor is ${faveCoffee} and your comments are ${comments}. We will soon contact you at ${email} or ${phone}.`;
  console.log("message:", message);

  let messagePara = document.createElement("p");
  messagePara.textContent = message;
  container.appendChild(messagePara);
  console.log("our data:", dataObj);
  form.reset();
}

