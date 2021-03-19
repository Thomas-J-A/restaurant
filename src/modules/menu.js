export function createMenuPage() {
    const contentDiv = document.getElementById('content');
    const mainDiv = document.createElement('main');
    const footer = document.querySelector('footer');
    const title = document.createElement('h1');
    const menu = document.createElement('div');
    const item1 = document.createElement('div');
    const item1_name = document.createElement('span');
    const item1_price = document.createElement('span');
    const item1_description = document.createElement('p');
    const item2 = document.createElement('div');
    const item2_name = document.createElement('span');
    const item2_price = document.createElement('span');
    const item2_description = document.createElement('p');
    const item3 = document.createElement('div');
    const item3_name = document.createElement('span');
    const item3_price = document.createElement('span');
    const item3_description = document.createElement('p');

    title.textContent = 'Menu';

    menu.setAttribute('id', 'menu');

    item1.classList.add('menu-item');
    item1_name.classList.add('item-name');
    item1_name.textContent = 'Brown Pig\xAE';
    item1_price.classList.add('price');
    item1_price.textContent = '6.99';
    item1_description.textContent = `The famous Brown Pig\xAE - 6 chunky rashers 
                                     of flame-grilled bacon, decadently dipped 
                                     into Peruvian cacao.`;
    item1.appendChild(item1_name);
    item1.appendChild(item1_price);
    item1.appendChild(item1_description);

    item2.classList.add('menu-item');
    item2_name.classList.add('item-name');
    item2_name.textContent = 'Beans-In-A-Bun  \u24CB';
    item2_price.classList.add('price');
    item2_price.textContent = '8.99';
    item2_description.textContent = `Haricot beans swimming in a thick sauce based on 
                                     Tuscan sundried tomatoes and Dijon, nestled in a 9-grain
                                     wheat roll.`;
    item2.appendChild(item2_name);
    item2.appendChild(item2_price);
    item2.appendChild(item2_description);

    item3.classList.add('menu-item');
    item3_name.classList.add('item-name');
    item3_name.textContent = 'I Dairy You';
    item3_price.classList.add('price');
    item3_price.textContent = '6.99';
    item3_description.textContent = `A hearty scoop of creamy, Cornish ice cream 
                                     gently placed upon a bed of chunky oven chips.`
    item3.appendChild(item3_name);
    item3.appendChild(item3_price);
    item3.appendChild(item3_description);


    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);

    mainDiv.setAttribute('id', 'content-menu');
    mainDiv.appendChild(title);
    mainDiv.appendChild(menu);

    contentDiv.insertBefore(mainDiv, footer);
}