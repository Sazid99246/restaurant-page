import { createElement, updateActivePage } from "./helper.js";

export function loadMenuPage() {
    updateActivePage(2);
    const container = document.querySelector("#content");

    const menuDiv = createElement('div', 'menu');
    const menuH1 = createElement('h1', null, 'Menu');
    const drinksDiv = createElement('div', 'drinks');
    const drinksH2 = createElement('h2', null, 'Drinks');
    const sidesDiv = createElement('div', 'sides');
    const sidesH2 = createElement('h2', null, 'Sides');
    const mainDishesDiv = createElement('div', 'main-dishes');
    const mainDishesH2 = createElement('h2', null, 'Main Dishes');

    const createItem = (name, ingredients, price) => {
        const itemContainer = createElement(`div`, 'item');
        const itemName = createElement(`h3`, 'name', `${name}`);
        const itemIngredients = createElement(`p`, 'ingredients', `${ingredients}`);
        const itemPrice = createElement(`p`, 'price', `${price}`);

        itemContainer.append(itemName, itemIngredients, itemPrice);
        return itemContainer;
    }

    container.appendChild(menuDiv);
    menuDiv.append(menuH1, drinksDiv, sidesDiv, mainDishesDiv)
    drinksDiv.appendChild(drinksH2);
    sidesDiv.appendChild(sidesH2);
    mainDishesDiv.appendChild(mainDishesH2);

    drinksDiv.appendChild(createItem('Blueberry Breeze Smoothie', 'Hand-picked blueberries, banana, vanilla bean, oat milk.', '$9'));
    drinksDiv.appendChild(createItem('Citrus Orchard Squeeze', 'Orange, grapefruit, tangerine, splash of raw honey.', '$7.50'));

    sidesDiv.appendChild(createItem('Crisp Garden Slaw', 'Cabbage, carrot, green apple, light citrus dressing.', '$4.50'));
    sidesDiv.appendChild(createItem('Fresh Herb Potato Mash', 'Creamy potatoes with chives and parsley.', '$5'));

    mainDishesDiv.appendChild(createItem('Citrus-Herb Chicken Plate', 'Grilled chicken with fresh lemon zest, blistered green beans, cracked pepper quinoa.', '$16'));
    mainDishesDiv.appendChild(createItem('Market-Fresh Salmon', 'Pan-seared salmon with dill, served with grilled summer squash and fresh lemon.', '$18'));
    mainDishesDiv.appendChild(createItem('Garden Vegetable Medley', 'Rotating selection of local produce, lightly seasoned and flash sautéed.', '$13'));
    mainDishesDiv.appendChild(createItem('Zesty Herb Turkey Medallions', 'Lean turkey medallions with rosemary, roasted root vegetables, and seasonal greens.', '$17'));
    mainDishesDiv.appendChild(createItem('Seared Lemon-Garlic Shrimp', 'Fresh shrimp tossed in lemon-garlic olive oil, served with quinoa and roasted asparagus.', '$19'));
    mainDishesDiv.appendChild(createItem('Grilled Mediterranean Chicken Skewers', 'Chicken skewers with bell peppers and red onion, served over a fresh herb tabbouleh.', '$16.50'));
    mainDishesDiv.appendChild(createItem('Tofu & Veggie Stir-Fry', 'Fresh tofu, broccoli, snap peas, bell peppers, and carrots in a light ginger-lime sauce, served over brown rice.', '$14.50'));
    mainDishesDiv.appendChild(createItem('Stuffed Portobello Mushroom', 'Large mushroom cap stuffed with quinoa, roasted vegetables, fresh herbs, and pine nuts, baked to perfection.', '$15'));
}