
import { selectionContent, algosMenu } from './modules/component.module.js';


const wrapper = document.createElement("div");
wrapper.setAttribute("class", "wrapper");
wrapper.setAttribute("id", "wrapper");
document.body.appendChild(wrapper);

// ******************1st Screen*************************
const Heading = document.createElement("div");
const buttons = document.createElement("div");

const yesBtn = document.createElement("button");
const noBtn = document.createElement("button");

const h1 = document.createElement("h1")

h1.innerText = "Ready to start"
yesBtn.innerText = "Yes"
noBtn.innerText = "No"

h1.setAttribute("class", "starting");
Heading.setAttribute("class", "heading");
buttons.setAttribute("class", "buttons");
yesBtn.setAttribute("class", "yes btn");
noBtn.setAttribute("class", "no btn");

buttons.appendChild(yesBtn)
buttons.appendChild(noBtn)

Heading.appendChild(h1)
Heading.appendChild(buttons)


wrapper.appendChild(Heading)
// ******************2nd Screen*************************
const menu = algosMenu();

wrapper.appendChild(menu);
// ******************3st Screen Algorithm*************************
const container = document.createElement("div");
container.setAttribute("class", "container");
container.setAttribute("id", "container");

const heading = document.createElement("h1");
heading.setAttribute("id", "heading1");

const paragraph = document.createElement("p");
paragraph.setAttribute("id", "firstParaghraph");

container.appendChild(heading)
container.appendChild(paragraph)

container.style.transform = "translateX(1000px)"
container.style.transition = "transform 1s ease-in";




wrapper.appendChild(container)