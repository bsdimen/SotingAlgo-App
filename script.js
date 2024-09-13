import { selectAlgo } from './modules/handleIntercations.module.js';


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
const menu = document.createElement("div");
menu.setAttribute("id", "menu")
const menuList = document.createElement("ul");
const menuBtn = document.createElement("button");

const items = ["Selection", "Insertion", "Quick", "Babble"];

items.forEach((itemText) => {

    const menuItem = document.createElement("li");
    menuItem.setAttribute("class", "menuItem");
    menuItem.setAttribute("id", itemText);

    const arrowIcon = document.createElement("img");
    arrowIcon.setAttribute("src", "./arrowRight.svg");
    arrowIcon.setAttribute("class", "icon");


    const menuItemLable = document.createElement("lable");
    menuItemLable.textContent = itemText + " Sort";
    menuItemLable.setAttribute("class", "lableCheck");

    menuItem.appendChild(arrowIcon);
    menuItem.appendChild(menuItemLable);

    menuItem.addEventListener("click", () => {
        selectAlgo(itemText)
    })

    menuList.appendChild(menuItem)

});
menu.appendChild(menuList)

wrapper.appendChild(menu);
// ******************3st Screen Algorithm*************************

const container = document.createElement("div");
container.setAttribute("class", "container");
container.setAttribute("id", "container");

const heading = document.createElement("h1");
heading.setAttribute("id", "heading1");

const paragraph = document.createElement("p");
paragraph.setAttribute("id", "firstParaghraph");

const sizeInput = document.createElement("div");
sizeInput.setAttribute("class", "sizeInput");

const dropDown = document.createElement("div");
dropDown.setAttribute("class", "dropDown");

const options = [3, 4, 5, 6, 7]

const selected = document.createElement("div");
selected.setAttribute("class", "selected");
selected.textContent = "Select a number"; // Default text
dropDown.appendChild(selected);

const optionsContainer = document.createElement("div");
optionsContainer.setAttribute("class", "options");
dropDown.appendChild(optionsContainer);

options.forEach(optionText => {

    const option = document.createElement("span");
    option.textContent = optionText;

    option.addEventListener("click", () => {
        selected.textContent = optionText;
        createNumberInputs(parseInt(optionText))
    });

    optionsContainer.appendChild(option);
})
const toggleOptions = () => {
    optionsContainer.style.display = optionsContainer.style.display === "block" ? "none" : "block";
};

dropDown.addEventListener("click", toggleOptions);

document.addEventListener("click", (event) => {
    if (!dropDown.contains(event.target)) {
        optionsContainer.style.display = "none";
    }
});

const arrayInputs = document.createElement("div");
arrayInputs.setAttribute("class", "arrayInputs");

const createNumberInputs = (number) => {
    arrayInputs.replaceChildren()
    for (let step = 1; step <= number; step++) {
        const numInput = document.createElement("input");
        numInput.setAttribute("type", "number");
        numInput.setAttribute("class", "numInput");
        numInput.setAttribute("id", "numInput" + step);


        arrayInputs.appendChild(numInput)

    }
}

container.style.transform = "translateX(1000px)"
container.style.transition = "transform 1s ease-in";
sizeInput.appendChild(dropDown)
container.appendChild(heading)
container.appendChild(paragraph)
container.appendChild(sizeInput)
container.appendChild(arrayInputs)




wrapper.appendChild(container)