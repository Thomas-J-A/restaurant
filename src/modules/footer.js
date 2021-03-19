export function createFooter() {
    const contentDiv = document.getElementById('content');
    const footer = document.createElement('footer');
    const copyrightMsg = document.createElement('span');
    const SNSLinks = document.createElement('ul');
    const facebook = document.createElement('li');
    const facebookIcon = document.createElement('i');
    const twitter = document.createElement('li');
    const twitterIcon = document.createElement('i');
    const instagram = document.createElement('li');
    const instagramIcon = document.createElement('i');
    const youtube = document.createElement('li');
    const youtubeIcon = document.createElement('i');

    copyrightMsg.textContent = 'TM & Copright 1968. All rights reserved.';

    facebookIcon.classList.add('fab');
    facebookIcon.classList.add('fa-facebook');

    twitterIcon.classList.add('fab');
    twitterIcon.classList.add('fa-twitter');

    instagramIcon.classList.add('fab');
    instagramIcon.classList.add('fa-instagram');

    youtubeIcon.classList.add('fab');
    youtubeIcon.classList.add('fa-youtube');

    facebook.appendChild(facebookIcon);
    twitter.appendChild(twitterIcon);
    instagram.appendChild(instagramIcon);
    youtube.appendChild(youtubeIcon);

    SNSLinks.appendChild(facebook);
    SNSLinks.appendChild(twitter);
    SNSLinks.appendChild(instagram);
    SNSLinks.appendChild(youtube);

    footer.appendChild(copyrightMsg);
    footer.appendChild(SNSLinks);

    contentDiv.appendChild(footer);

}