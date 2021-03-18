export function createHomePage() {
    const contentDiv = document.getElementById('content');
    const mainDiv = document.createElement('main');
    const footer = document.querySelector('footer');
    const hero = document.createElement('div');
    const heroImage = document.createElement('img');
    const heroText = document.createElement('div');
    const headline = document.createElement('h1');
    const about = document.createElement('p');
    const orderBtn = document.createElement('button');
    const reviews = document.createElement('div');
    const review1 = document.createElement('span');
    const review2 = document.createElement('span');
    const review3 = document.createElement('span');

    heroImage.setAttribute('id', 'hero-image');
    heroImage.src = './images/hero.jpeg';

    headline.textContent = 'HOME OF THE FAMOUS* Brown Pig\xAE';

    about.textContent = `Here at Chef Combo we think outside
                             of the box for our new recipies. In fact, 
                             we threw that box away!`;

    orderBtn.setAttribute('id', 'btn-order');
    orderBtn.textContent = 'Order Now';

    review1.textContent = '\'WTF\'';
    review2.textContent = '\'My 8-year-old got sick\'';
    review3.textContent = '\'Just go to McDonalds.\'';

    heroText.setAttribute('id', 'hero-text');
    heroText.appendChild(headline);
    heroText.appendChild(about);
    heroText.appendChild(orderBtn);

    hero.setAttribute('id', 'hero');
    hero.appendChild(heroImage);
    hero.appendChild(heroText);
    
    reviews.setAttribute('id', 'reviews');
    reviews.appendChild(review1);
    reviews.appendChild(review2);
    reviews.appendChild(review3);

    mainDiv.setAttribute('id', 'content-home');
    mainDiv.appendChild(hero);
    mainDiv.appendChild(reviews);

    contentDiv.insertBefore(mainDiv, footer);
}