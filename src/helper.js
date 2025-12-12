import { loadHomePage } from "./homepage.js";
import { loadMenuPage } from "./menupage.js";
import { loadContactPage } from "./contactpage.js";


// 'elm' short for element
const createElement = (elmName, elmClass = '', elmText = '') => {
    const elm = document.createElement(`${elmName}`);
    elm.classList.add(`${elmClass}`);
    elm.textContent = `${elmText}`;
    return elm;
}

const updateActivePage = (pageNumber) => {
    document.querySelector(`nav button:nth-child(${pageNumber})`).classList.add('active-page');
    document.querySelectorAll(`nav button:not(:nth-child(${pageNumber}))`).forEach((button) => button.classList.remove('active-page'));
}

const clearContentDiv = () => {
    const contentDiv = document.querySelector('#content');
    contentDiv.textContent = '';
}

export { loadHomePage, loadMenuPage, clearContentDiv, loadContactPage, createElement, updateActivePage }; 