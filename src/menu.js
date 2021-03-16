export function createMenuPage() {
    const contentDiv = document.getElementById('content');
    const mainDiv = document.createElement('main');
    const footer = document.querySelector('footer');
    const title = document.createElement('h1');
    const menu = document.createElement('div');
    const item1 = document.createElement('div');
    const item1_img = document.createElement('img');
    const item1_name = document.createElement('h3');
    const item1_description = document.createElement('p');
    const item2 = document.createElement('div');
    const item2_img = document.createElement('img');
    const item2_name = document.createElement('h3');
    const item2_description = document.createElement('p');
    const item3 = document.createElement('div');
    const item3_img = document.createElement('img');
    const item3_name = document.createElement('h3');
    const item3_description = document.createElement('p');

    title.textContent = 'MENU';

    item1_img.src = './images/brown_pig.jpg';
    item1_name.textContent = 'Brown Pig';
    item1_description.textContent = `The famous Brown Pig - 6 chunky rashers 
                                     from grain-fed, happy pigs, decadently 
                                     dipped into Peruvian cacao. You won\'t 
                                     get \'boar\'d with this one.`;
    item1.appendChild(item1_img);
    item1.appendChild(item1_name);
    item1.appendChild(item1_description);

    item2_img.src = './images/beans_in_bun.jpg';
    item2_name.textContent = 'Beans-In-A-Bun V';
    item2_description.textContent = `Elegant, plant-based alternative to the 
                                     American staple. Haricot beans swimming 
                                     in a sauce made with Tuscan sundried tomatoes. 
                                     This one\'ll really blow your socks off.`;
    item2.appendChild(item2_img);
    item2.appendChild(item2_name);
    item2.appendChild(item2_description);

    item3_img.src = './images/dairy_you.jpg';
    item3_name.textContent = 'I dairy you';
    item3_description.textContent = `Dessert and sides, all in one. Part of our 
                                     \'Quick Cuisine\' line.`;
    item3.appendChild(item3_img);
    item3.appendChild(item3_name);
    item3.appendChild(item3_description);


    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);

    mainDiv.classList.add('content-menu');
    mainDiv.appendChild(title);
    mainDiv.appendChild(menu);

    contentDiv.insertBefore(mainDiv, footer);
}