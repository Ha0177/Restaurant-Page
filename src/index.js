import "./style.css";
import { loadHome } from "./home-module.js";
import { loadMenu } from "./menu-module.js";
import { loadContact } from "./contact-module.js";
import githubLogo from "./github-logo.svg.png";

loadHome();

const footerLink = document.querySelector("footer a");
const githubLogoImg = document.createElement("img");
githubLogoImg.src = githubLogo;
githubLogoImg.alt = "GitHub Logo";
githubLogoImg.classList.add("github-logo");
footerLink.prepend(githubLogoImg);

(function tabSwitcher() {
    const homeBtn = document.querySelector("#home")
    const menuBtn = document.querySelector("#menu")
    const contactBtn = document.querySelector("#contact")
    const container = document.querySelector("#content")

    homeBtn.addEventListener("click", () => {
        container.innerHTML = "";
        contactBtn.classList.remove("active")
        menuBtn.classList.remove("active")
        homeBtn.classList.add("active")
        loadHome();
    })
    menuBtn.addEventListener("click", () => {
        container.innerHTML = "";
        homeBtn.classList.remove("active")
        contactBtn.classList.remove("active")
        menuBtn.classList.add("active")
        loadMenu();
    })
    contactBtn.addEventListener("click", () => {
        container.innerHTML = "";
        menuBtn.classList.remove("active")
        homeBtn.classList.remove("active")
        contactBtn.classList.add("active")
        loadContact();
    })
})();