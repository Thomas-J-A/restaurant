export function createContactPage() {
    const contentDiv = document.getElementById('content');
    const mainDiv = document.createElement('main');
    const footer = document.querySelector('footer');
    const title = document.createElement('h1');
    const contactDetails = document.createElement('div');
    const address = document.createElement('p');
    const hours = document.createElement('p');
    const phone = document.createElement('p');
    const map = document.createElement('iframe');
   
    title.textContent = 'Contact Us';
    
    address.innerHTML = '<i class="fas fa-map-marker-alt"></i>Above McDonalds, U.S.A';

    hours.innerHTML = '<i class="fas fa-clock"></i>Mon-Weds, 4:00PM - 4:20PM';

    phone.innerHTML = '<i class="fas fa-phone-square-alt"></i>01584-BBQ-RIB';

    map.src = 'https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d25164257.51731283!2d-99.58012407248802!3d39.65401784563833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1616171492731!5m2!1sen!2suk';
    
    contactDetails.setAttribute('id', 'contact-details');

    mainDiv.setAttribute('id', 'content-contact');

    contactDetails.appendChild(map);
    contactDetails.appendChild(address);
    contactDetails.appendChild(hours);
    contactDetails.appendChild(phone);

    mainDiv.appendChild(title);
    mainDiv.appendChild(contactDetails);

    contentDiv.insertBefore(mainDiv, footer);
}