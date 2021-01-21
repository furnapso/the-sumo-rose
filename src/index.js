import homePage from "./home"
import contactPage from "./contact"

const page = {
    contentDiv: document.querySelector("#content"),
    home: document.querySelector("#home"),
    contact: document.querySelector("#contact"),
    links: document.querySelectorAll(".menu a")
}

page.home.addEventListener("click", () => {
    page.links.forEach(link => link.classList.remove("active"));
    page.home.classList.add("active");
    homePage(page.contentDiv)
});
page.contact.addEventListener("click", () => {
    page.links.forEach(link => link.classList.remove("active"));
    page.contact.classList.add("active");
    contactPage(page.contentDiv);
});

homePage(page.contentDiv);