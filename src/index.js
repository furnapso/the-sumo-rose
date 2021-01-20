import homePage from "./home"
import contactPage from "./contact"

const page = {
    contentDiv: document.querySelector("#content"),
    home: document.querySelector("#home"),
    contact: document.querySelector("#contact")
}

page.home.addEventListener("click", () => homePage(page.contentDiv));
page.contact.addEventListener("click", () => contactPage(page.contentDiv));

homePage(page.contentDiv);