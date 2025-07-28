import "./style.css";
import { loadHome } from "./home-module.js";
import { loadMenu } from "./menu-module.js";
import { loadContact } from "./contact-module.js";

loadHome();

(function tabSwitcher() {
    const homeBtn = document.querySelector("#home")
    const menuBtn = document.querySelector("#menu")
    const contactBtn = document.querySelector("#contact")
    const container = document.querySelector("#content")

    homeBtn.addEventListener("click", () => {
        container.innerHTML = "";
        loadHome();
    })
    menuBtn.addEventListener("click", () => {
        container.innerHTML = "";
        loadMenu();
    })
    contactBtn.addEventListener("click", () => {
        container.innerHTML = "";
        loadContact();
    })
})();