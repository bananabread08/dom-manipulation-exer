const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
container.appendChild(content);

const firstP = document.createElement("p");
firstP.classList.add("paragraph-one")
firstP.textContent = "Hey I'm red";
firstP.style.color = "red";
container.appendChild(firstP);

const firstHead = document.createElement("h3");
firstHead.classList.add("heading-one");
firstHead.textContent = "Hey I'm a blue H3";
firstHead.style.color = "blue";
container.appendChild(firstHead);

const newdiv = document.createElement("div");
const secondHead = document.createElement("h1");
const secondP = document.createElement("p");
secondHead.textContent = "I'm in a div";
secondP.textContent = "ME TOO";
newdiv.appendChild(secondHead);
newdiv.appendChild(secondP);
container.appendChild(newdiv);

