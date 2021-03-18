export function createContactPage() {
    const contentDiv = document.getElementById('content');
    const mainDiv = document.createElement('main');
    const footer = document.querySelector('footer');
    const title = document.createElement('h1');
    const wrapperDiv = document.createElement('div');
    const infoDiv = document.createElement('div');
    const addressDiv = document.createElement('div');
    const addressIcon = document.createElement('i');
    const address = document.createElement('p');
    const hoursDiv = document.createElement('div');
    const hoursIcon = document.createElement('i');
    const hours = document.createElement('p');
    const phoneDiv = document.createElement('div');
    const phoneIcon = document.createElement('i');
    const phone = document.createElement('p');
    const map = document.createElement('iframe');

    title.textContent = 'CONTACT US';

    addressIcon.classList.add('fas');
    addressIcon.classList.add('fa-map-marker-alt');
    address.textContent = 'Above McDonalds, America';
    
    hoursIcon.classList.add('fas');
    hoursIcon.classList.add('fa-clock');
    hours.textContent = 'Mon-Weds, 4:00PM - 4:20PM';
    
    phoneIcon.classList.add('fas');
    phoneIcon.classList.add('fa-phone-square-alt');
    phone.textContent = '01584-BBQ-RIB';


    map.src = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25716678.3482305!2d-110.35492210356527!3d38.11128162768318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1615928391043!5m2!1sen!2suk';
    
    infoDiv.classList.add('info');

    wrapperDiv.classList.add('wrapper-outer-contact');

    mainDiv.classList.add('content-contact');

    addressDiv.appendChild(addressIcon);
    addressDiv.appendChild(address);

    hoursDiv.appendChild(hoursIcon);
    hoursDiv.appendChild(hours);

    phoneDiv.appendChild(phoneIcon);
    phoneDiv.appendChild(phone);

    infoDiv.appendChild(addressDiv);
    infoDiv.appendChild(hoursDiv);
    infoDiv.appendChild(phoneDiv);

    wrapperDiv.appendChild(infoDiv);
    wrapperDiv.appendChild(map);

    mainDiv.appendChild(title);
    mainDiv.appendChild(wrapperDiv);

    contentDiv.insertBefore(mainDiv, footer);
}