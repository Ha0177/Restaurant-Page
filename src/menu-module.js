import menuImg from "./menu-img.png"

function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item")

    const itemName = document.createElement("h3")
    itemName.textContent = name;
    itemName.classList.add("item-name")

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;
    itemDescription.classList.add("item-description")

    menuItem.appendChild(itemName)
    menuItem.appendChild(itemDescription)

    return menuItem;
}

export function loadMenu() {
    const container = document.querySelector("#content")
    const headerImg = document.createElement("img");

    const headline = document.createElement("h1");
    headline.textContent = "This is the menu!"
    headline.classList.add("headline")

    const itemContainer = document.createElement("div");
    itemContainer.classList.add("item-container")

    itemContainer.appendChild(createMenuItem("Option 1", "The best option"))
    itemContainer.appendChild(createMenuItem("Option 2", "The second best option"))
    itemContainer.appendChild(createMenuItem("Option 3", "The third best option"))

    headerImg.src = menuImg;
    headerImg.classList.add("header-img");
    headerImg.alt = "Menu Image";

    container.appendChild(headerImg);
    container.appendChild(headline);
    container.appendChild(itemContainer);
} 