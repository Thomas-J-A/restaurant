export function createHomePage() {
    const contentDiv = document.getElementById('content');
    const mainDiv = document.createElement('main');
    const footer = document.querySelector('footer');
    const hero = document.createElement('div');
    const heroText = document.createElement('p');
    const orderBtn = document.createElement('button');
    const reviews = document.createElement('div');
    const review1 = document.createElement('span');
    const review2 = document.createElement('span');
    const review3 = document.createElement('span');

    heroText.setAttribute('id', 'hero-text');
    heroText.innerHTML = 'Home of the Famous <span> Brown Pig\xAE</span>';

    orderBtn.setAttribute('id', 'btn-order');
    orderBtn.textContent = 'ORDER NOW';

    review1.textContent = '\'WTF\'';
    review2.textContent = '\'My 8-year-old got sick\'';
    review3.textContent = '\'Just go to McDonalds.\'';
    
    reviews.setAttribute('id', 'reviews');
    reviews.appendChild(review1);
    reviews.appendChild(review2);
    reviews.appendChild(review3);

    hero.setAttribute('id', 'hero');

    hero.appendChild(heroText);
    hero.appendChild(orderBtn);

    mainDiv.setAttribute('id', 'content-home');
    mainDiv.appendChild(hero);
    mainDiv.appendChild(reviews);

    contentDiv.insertBefore(mainDiv, footer);
}