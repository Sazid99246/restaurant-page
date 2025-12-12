import { createElement, updateActivePage } from "./helper.js";

export function loadContactPage() {
    updateActivePage(3);

    const container = document.querySelector("#content");
    const contactDiv = createElement('div', 'contact');
    container.appendChild(contactDiv);

    const descriptionDiv = createElement('div', 'description');
    const descriptionH1 = createElement('h1', null, 'Contact Us');
    const descriptionParagraph = createElement('p', null, `Have a question? We're here to help!`);
    descriptionDiv.append(descriptionH1, descriptionParagraph);
    contactDiv.appendChild(descriptionDiv);


    const locationDiv = createElement('div', 'location');
    const locationH2 = createElement('h2', null, 'Our Location');
    const restaurantNameParagraph = createElement('p', null, `Have a question? We're here to help!`);
    const addressParagraph = createElement('p', null, `123 Main Street\nAvocado Drive, Oregon`);
    const locationNote = createElement('em', null, 'Parking available behind the building.');
    locationDiv.append(locationH2, restaurantNameParagraph, addressParagraph, locationNote);
    contactDiv.appendChild(descriptionDiv);

    const callDiv = createElement('div', 'call');
    const callH2 = createElement('h2', null, 'Call Us');
    const phoneParagraph = createElement('p', null);
    const phoneStrong = createElement('strong', null, 'Phone');
    phoneParagraph.appendChild(phoneStrong);
    phoneParagraph.textContent += `: (123) 456-7890`;
    const callNote = createElement('em', null, 'For immediate assistance or reservations.');
    callDiv.append(callH2, phoneParagraph, callNote);
    contactDiv.appendChild(callDiv);


    const emailDiv = createElement('div', 'email');
    const emailH2 = createElement('h2', null, 'Email');
    const emailParagraph = createElement('p', null);
    const emailLink = createElement('a', null, 'hello@yummy.com');
    emailLink.href = '#';
    emailParagraph.append(emailLink);
    const emailNote = createElement('em', null, 'For general inquiries and catering.');
    emailDiv.append(emailH2, emailParagraph, emailNote);
    contactDiv.appendChild(emailDiv);

    const hoursDiv = createElement('div', 'hours');
    const hoursH2 = createElement('h2', null, 'Hours');
    const hours1Paragraph = createElement('p', null, 'Monday-Thursday');
    const hours2Paragraph = createElement('p', null, 'Friday-Saturday');
    const hours3Paragraph = createElement('p', null, 'Sunday');
    const hours1Days = createElement('strong', null, ': 11:00 AM - 9:00 PM');
    const hours2Days = createElement('strong', null, ': 11:00 AM - 11:00 PM');
    const hours3Days = createElement('strong', null, ': 12:00 AM - 8:00 PM');
    hours1Paragraph.appendChild(hours1Days);
    hours2Paragraph.appendChild(hours2Days);
    hours3Paragraph.appendChild(hours3Days);
    hoursDiv.append(hoursH2, hours1Paragraph, hours2Paragraph, hours3Paragraph);
    contactDiv.appendChild(hoursDiv);
}