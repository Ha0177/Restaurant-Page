import menuImg from "./menu-img.png"

export function loadMenu() {
    const container = document.querySelector("#content")
    const headerImg = document.createElement("img");

    const headline = document.createElement("h1");
    headline.textContent = "This is the menu!"
    headline.classList.add("headline")

    const description = document.createElement("p");
    description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore itaque tempora magni molestias. Dolorem dolor totam tempora dolorum, corporis deleniti reiciendis rem, modi neque fugit maiores? Sunt ipsa architecto itaque."
    description.classList.add("description")

    headerImg.src = menuImg;
    headerImg.classList.add("header-img");
    headerImg.alt = "Menu Image";

    container.appendChild(headerImg);
    container.appendChild(headline);
    container.appendChild(description);
} 