import { selectAlgo } from './handleIntercations.module.js';
import { selectionAlgo } from "./algorithms.module.js"

export function selectionContent() {

    const container = document.getElementById("container");

    const heading = document.getElementById("heading1")
    const paragraph = document.getElementById("firstParaghraph")

    heading.textContent = "Selection Algorithm";
    paragraph.textContent = "First Let choose the size of our array";
    const inputs = createArrayInput();
    console.log(inputs)

    container.appendChild(inputs)




}

export function algosMenu() {
    const menu = document.createElement("div");
    menu.setAttribute("id", "menu")
    const menuList = document.createElement("ul");

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

    return menu;
}

export function createArrayInput() {

    const handleInputs = document.createElement("div");


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
            passArray.style.transform = "translateX(0)";

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
    const sizeInput = document.createElement("div");
    sizeInput.setAttribute("class", "sizeInput");

    const passArray = document.createElement("button");
    passArray.setAttribute("class", "next btn")
    passArray.setAttribute("id", "passArray");
    passArray.textContent = "Start Sorting"
    passArray.style.transform = "translateX(1000px)";
    passArray.style.transition = "transform 1s ease-in";
    passArray.addEventListener("click", () => {
        const inputs = document.getElementsByClassName("numInput");
        let array = []
        Array.from(inputs).forEach((input) => {
            array = [...array, parseInt(input.value)]
        })
        selectionAlgo(array)

    })

    sizeInput.appendChild(dropDown)
    handleInputs.appendChild(sizeInput)

    handleInputs.appendChild(arrayInputs)

    handleInputs.appendChild(passArray)

    return handleInputs;


}