import { selectionAlgo } from "./algorithms.module.js"

export function selectAlgo(id) {

    const container = document.getElementById("container")
    const element = document.getElementById("menu");
    element.style.transform = "translateX(-400px)"
    element.style.transition = "transform 1s ease-in";
    container.style.transform = "translateX(0px)"
    container.style.transition = "transform 1s ease-in";

    switch (id) {
        case "Selection":
            wrapper.appendChild(selectionAlgo());
            break;

        default:
            null
            break;

    }


}