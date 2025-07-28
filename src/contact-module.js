import contactImg from "./contact-img.png"

export function loadContact() {
    const container = document.querySelector("#content")
    const headerImg = document.createElement("img");

    const headline = document.createElement("h1");
    headline.textContent = "Contact us!"
    headline.classList.add("headline")

    const description = document.createElement("p");
    description.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore itaque tempora magni molestias. Dolorem dolor totam tempora dolorum, corporis deleniti reiciendis rem, modi neque fugit maiores? Sunt ipsa architecto itaque."
    description.classList.add("description")

    headerImg.src = contactImg;
    headerImg.classList.add("header-img");
    headerImg.alt = "Contact Image";

    container.appendChild(headerImg);
    container.appendChild(headline);
    container.appendChild(description);
} 