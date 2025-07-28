import contactImg from "./contact-img.png"

export function loadContact() {
    const container = document.querySelector("#content")
    const headerImg = document.createElement("img");

    const headline = document.createElement("h1");
    headline.textContent = "Contact us!"
    headline.classList.add("headline")

    const description = document.createElement("p");
    description.textContent = "At adsiasdi@mail.com or Phone number 04295026902123122313 for orders."
    description.classList.add("description")

    headerImg.src = contactImg;
    headerImg.classList.add("header-img");
    headerImg.alt = "Contact Image";

    container.appendChild(headerImg);
    container.appendChild(headline);
    container.appendChild(description);
} 