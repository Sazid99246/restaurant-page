import "./styles.css";
import * as page from "./helper.js"


const nav = document.querySelector('header nav');

const navClickHandler = (event) => {
    if (event.target === nav) return;
    page.clearContentDiv();
    
    event.target.textContent === "Home" ? page.loadHomePage() :
    event.target.textContent === "Menu" ? page.loadMenuPage() :
    page.loadContactPage();
}

nav.addEventListener('click', (event) => {
    navClickHandler(event);
})

// initial page load
page.loadHomePage()
