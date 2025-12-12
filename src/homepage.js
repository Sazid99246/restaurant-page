import { createElement, updateActivePage, clearContentDiv, loadMenuPage } from "./helper.js";

export function loadHomePage() {
    updateActivePage(1);
    const container = document.querySelector('#content');

    const textContainerDiv = createElement('div', 'text');
    const headlineH1 = createElement('h1', 'headline', `Become Healthy\n Choose Yummy!`);
    const textParagraph = createElement('p', null, 'We cook when you order, freshly made.');
    const orderButton = createElement('button', 'order', 'Order Now');

    container.appendChild(textContainerDiv);
    textContainerDiv.append(headlineH1, textParagraph, orderButton);

    const orderBtnHandler = () => {
        clearContentDiv();
        loadMenuPage();
    }
    orderButton.addEventListener('click', orderBtnHandler);
}