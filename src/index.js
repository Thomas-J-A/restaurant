import {createHeader} from './header.js';
import {createFooter} from './footer.js';
import {createHomePage} from './home.js';
import {createMenuPage} from './menu.js';
import {createContactPage} from './contact.js';

window.addEventListener('load', createHeader);
window.addEventListener('load', createFooter);
window.addEventListener('load', createHomePage);
window.addEventListener('load', addListeners);

function addListeners() {
    const homeTab = document.getElementById('home-tab');
    const menuTab = document.getElementById('menu-tab');
    const contactTab = document.getElementById('contact-tab');

    homeTab.addEventListener('click', switchTab);
    menuTab.addEventListener('click', switchTab);
    contactTab.addEventListener('click', switchTab);
    addButtonListener();
}

function switchTab(e) {
    const contentDiv = document.getElementById('content');
    const mainDiv = document.querySelector('main');

    contentDiv.removeChild(mainDiv);
    
    switch (e.target.id) {
        case 'home-tab':
            createHomePage();
            addButtonListener();
            break;
        case 'menu-tab':
            createMenuPage();
            break;
        case 'contact-tab':
            createContactPage();
            break;
        case 'btn-order':
            createMenuPage();
            break;
    }
}

function addButtonListener() {
    const orderBtn = document.getElementById('btn-order');
    orderBtn.addEventListener('click', switchTab);
}