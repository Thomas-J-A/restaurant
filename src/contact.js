export function createContactPage() {
    const contentDiv = document.getElementById('content');
    const mainDiv = document.createElement('main');
    const footer = document.querySelector('footer');
    const title = document.createElement('h1');
    const contactDiv = document.createElement('div');
    const address = document.createElement('p');
    const hours = document.createElement('p');
    const phone = document.createElement('p');

    title.textContent = 'CONTACT US';

    address.textContent = 'Above McDonalds, America';
    
    hours.textContent = 'Mon-Wednesday, 4:00PM - 4:20PM';

    phone.textContent = '123456789';

    contactDiv.appendChild(address);
    contactDiv.appendChild(hours);
    contactDiv.appendChild(phone);

    mainDiv.appendChild(title);
    mainDiv.appendChild(contactDiv);

    contentDiv.insertBefore(mainDiv, footer);
}