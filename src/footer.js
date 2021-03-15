export function createFooter() {
    const contentDiv = document.getElementById('content');
    const footer = document.createElement('footer');
    const copyrightMsg = document.createElement('span');
    const SNSLinks = document.createElement('div');
    const facebook = document.createElement('span');
    const twitter = document.createElement('span');
    const instagram = document.createElement('span');
    const youtube = document.createElement('span');

    copyrightMsg.textContent = 'TM & Copright 1968. All rights reserved.';

    // TODO add sns logos
    

    footer.appendChild(copyrightMsg);

    contentDiv.appendChild(footer);

}