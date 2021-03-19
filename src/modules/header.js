export function createHeader() {
    const contentDiv = document.getElementById('content');
    const header = document.createElement('header');
    const logo = document.createElement('div');
    const logoName = document.createElement('span');
    const logoTagline = document.createElement('span');
    const navbar = document.createElement('ul');
    const homeTab = document.createElement('li');
    const menuTab = document.createElement('li');
    const contactTab = document.createElement('li');
    const jokeText = document.createElement('span');

    logo.setAttribute('id', 'logo');
    logoName.textContent = 'Chef Combo';
    logoTagline.textContent = 'Where flavours collide';

    homeTab.setAttribute('id', 'home-tab');
    homeTab.textContent = 'HOME';

    menuTab.setAttribute('id', 'menu-tab');
    menuTab.textContent = 'MENU';

    contactTab.setAttribute('id', 'contact-tab');
    contactTab.textContent = 'CONTACT US';

    logo.appendChild(logoName);
    logo.appendChild(logoTagline);

    navbar.appendChild(homeTab);
    navbar.appendChild(menuTab);
    navbar.appendChild(contactTab);

    header.appendChild(logo);
    header.appendChild(navbar);

    contentDiv.appendChild(header);
}