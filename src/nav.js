export function createNavbar() {
    const contentDiv = document.getElementById('content');
    const navbar = document.createElement('nav');
    const logo = document.createElement('span');
    const homeTab = document.createElement('span');
    const menuTab = document.createElement('span');
    const contactTab = document.createElement('span');

    logo.setAttribute('id', 'logo');
    logo.textContent = 'Chef Combo';

    homeTab.setAttribute('id', 'home-tab');
    homeTab.textContent = 'HOME';

    menuTab.setAttribute('id', 'menu-tab');
    menuTab.textContent = 'MENU';

    contactTab.setAttribute('id', 'contact-tab');
    contactTab.textContent = 'CONTACT US';

    navbar.appendChild(logo);
    navbar.appendChild(homeTab);
    navbar.appendChild(menuTab);
    navbar.appendChild(contactTab);

    contentDiv.appendChild(navbar);
}