export function createMenuPage() {
    const contentDiv = document.getElementById('content');
    const mainDiv = document.createElement('main');
    const footer = document.querySelector('footer');
    const title = document.createElement('h1');
    const menu = document.createElement('div');
    const item1 = document.createElement('div');
    const item1_img = document.createElement('img');
    const item1_name_price_wrapper = document.createElement('div');
    const item1_name = document.createElement('h3');
    const item1_special_alert = document.createElement('span');
    const item1_price = document.createElement('span');
    const item1_desc_review_wrapper = document.createElement('div');
    const item1_description = document.createElement('p');
    const item1_review = document.createElement('p');
    const item2 = document.createElement('div');
    const item2_img = document.createElement('img');
    const item2_name_price_wrapper = document.createElement('div');
    const item2_name = document.createElement('h3');
    const item2_special_alert = document.createElement('span');
    const item2_price = document.createElement('span');
    const item2_desc_review_wrapper = document.createElement('div');
    const item2_description = document.createElement('p');
    const item2_review = document.createElement('p');
    const item3 = document.createElement('div');
    const item3_img = document.createElement('img');
    const item3_name_price_wrapper = document.createElement('div');
    const item3_name = document.createElement('h3');
    const item3_special_alert = document.createElement('span');
    const item3_price = document.createElement('span');
    const item3_desc_review_wrapper = document.createElement('div');
    const item3_description = document.createElement('p');
    const item3_review = document.createElement('p');

    title.textContent = 'MENU';

    item1.classList.add('menu-item');
    item1_img.src = './images/hero.png';
    item1_name.textContent = 'Brown Pig\xAE';
    item1_special_alert.setAttribute('id', 'special-alert-item-1');
    item1_special_alert.textContent = 'Chef\'s Recommendation';
    item1_price.textContent = '6.99';
    item1_description.classList.add('item-description');
    item1_description.textContent = `The famous Brown Pig\xAE - 6 chunky rashers 
                                     of flame-grilled bacon, decadently dipped 
                                     into Peruvian cacao. You won\'t get \'boar\'ed 
                                     with this one.`;
    item1_review.classList.add('item-review');
    item1_review.textContent = `\'2 fundamentally warring flavours -
                                my 8-year-old got sick\'`;
    item1_name_price_wrapper.appendChild(item1_name);
    item1_name_price_wrapper.appendChild(item1_special_alert);
    item1_name_price_wrapper.appendChild(item1_price);
    item1_desc_review_wrapper.appendChild(item1_description);
    item1_desc_review_wrapper.appendChild(item1_review);
    item1.appendChild(item1_img);
    item1.appendChild(item1_name_price_wrapper);
    item1.appendChild(item1_desc_review_wrapper);

    item2.classList.add('menu-item');
    item2_img.src = './images/beans_in_bun.jpg';
    item2_name.textContent = 'Beans-In-A-Bun';
    item2_special_alert.setAttribute('id', 'special-alert-item-2');
    item2_special_alert.textContent = '\u24cb';
    item2_price.textContent = '8.99';
    item2_description.classList.add('item-description');
    item2_description.textContent = `Elegant, plant-based alternative to the 
                                     American staple. Haricot beans swimming 
                                     in a thick sauce of Tuscan sundried tomatoes. 
                                     This one\'ll really blow your socks off.`;
    item2_review.classList.add('item-review');
    item2_review.textContent = `\'This was my only option as a 
                                vegan - literally baked beans in a bun\'`;
    item2_name_price_wrapper.appendChild(item2_name);
    item2_name_price_wrapper.appendChild(item2_special_alert);
    item2_name_price_wrapper.appendChild(item2_price);
    item2_desc_review_wrapper.appendChild(item2_description);
    item2_desc_review_wrapper.appendChild(item2_review);
    item2.appendChild(item2_img);
    item2.appendChild(item2_name_price_wrapper);
    item2.appendChild(item2_desc_review_wrapper);

    item3.classList.add('menu-item');
    item3_img.src = './images/dairy_you.jpg';
    item3_name.textContent = 'I Dairy You';
    item3_special_alert.setAttribute('id', 'special-alert-item-3');
    item3_special_alert.textContent = 'Seasonal';
    item3_price.textContent = '6.99';
    item3_description.classList.add('item-description');
    item3_description.textContent = `Dessert and sides, all in one. The dream team 
                                     of Cornish milk and King Edward potatoes. (Part 
                                     of our \'Quick Cuisine\' range)`;
    item3_review.classList.add('item-review');
    item3_review.textContent = `\'Overpriced for essentially a scoop of ice cream
                                on some fries\'`;
    item3_name_price_wrapper.appendChild(item3_name);
    item3_name_price_wrapper.appendChild(item3_special_alert);
    item3_name_price_wrapper.appendChild(item3_price);
    item3_desc_review_wrapper.appendChild(item3_description);
    item3_desc_review_wrapper.appendChild(item3_review);
    item3.appendChild(item3_img);
    item3.appendChild(item3_name_price_wrapper);
    item3.appendChild(item3_desc_review_wrapper);


    menu.appendChild(item1);
    menu.appendChild(item2);
    menu.appendChild(item3);

    mainDiv.classList.add('content-menu');
    mainDiv.appendChild(title);
    mainDiv.appendChild(menu);

    contentDiv.insertBefore(mainDiv, footer);
}