export function createHomePage() {
    const contentDiv = document.getElementById('content');
    const mainDiv = document.createElement('main');
    const footer = document.querySelector('footer');
    const heroImage = document.createElement('img');
    const heroTextWrapper = document.createElement('div');
    const heroText = document.createElement('h1');
    const aboutText = document.createElement('p');
    const orderBtn = document.createElement('button');
    const reviewDiv = document.createElement('div');
    const review1 = document.createElement('span');
    const review2 = document.createElement('span');
    const review3 = document.createElement('span');

    heroImage.classList.add('hero-image');
    heroImage.src = './images/brown_pig.jpg';

    heroText.textContent = 'HOME OF THE FAMOUS* Brown Pig\xAE';

    aboutText.textContent = `Here at Chef Combo we think outside
                             of the box for our new recipies. In fact, 
                             we threw that box away!`;

    orderBtn.setAttribute('id', 'btn-order');
    orderBtn.textContent = 'Order Now';

    heroTextWrapper.classList.add('wrapper-hero-text');
    heroTextWrapper.appendChild(heroText);
    heroTextWrapper.appendChild(aboutText);
    heroTextWrapper.appendChild(orderBtn);
    

    review1.textContent = '\'WTF\'';
    review2.textContent = '\'My 8-year-old got sick\'';
    review3.textContent = '\'Just go to McDonalds.\'';

    reviewDiv.classList.add('reviews');
    reviewDiv.appendChild(review1);
    reviewDiv.appendChild(review2);
    reviewDiv.appendChild(review3);

    mainDiv.classList.add('content-home');
    mainDiv.appendChild(heroImage);
    mainDiv.appendChild(heroTextWrapper);
    mainDiv.appendChild(reviewDiv);

    contentDiv.insertBefore(mainDiv, footer);
}