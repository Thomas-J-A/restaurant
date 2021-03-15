export function createHomePage() {
    const contentDiv = document.getElementById('content');
    const mainDiv = document.createElement('main');
    const footer = document.querySelector('footer');
    const heroImage = document.createElement('img');
    const heroText = document.createElement('h1');
    const aboutText = document.createElement('p');

    heroImage.src = './images/brown_pig.jpg';

    heroText.textContent = 'HOME OF THE FAMOUS* Brown Pig';

    aboutText.textContent = `Here at Chef Combo we think outside
                             of the box for our new recipies. In fact, 
                             we're not even sure where the box is anymore...`;

    mainDiv.appendChild(heroImage);
    mainDiv.appendChild(heroText);
    mainDiv.appendChild(aboutText);

    contentDiv.insertBefore(mainDiv, footer);
}