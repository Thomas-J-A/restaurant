export function createHomepage() {
    const heroImage = document.createElement('img');
    const heroText = document.createElement('h1');
    const aboutText = document.createElement('p');
    const contentDiv = document.getElementById('content');

    heroImage.src = './brown_pig.jpg';
    contentDiv.appendChild(heroImage);

    heroText.textContent = 'HOME OF THE FAMOUS* Brown Pig';
    contentDiv.appendChild(heroText);

    aboutText.textContent = `Here at Chef Combo we think outside
                             of the box for our new recipies. In fact, 
                             we're not even sure where the box is anymore...`;
    contentDiv.appendChild(aboutText);
}