import '../css/screen.css';

const images = document.querySelectorAll('.kg-gallery-image img');

const currentPath = window.location.href.replace('#subscribe', '');

images.forEach((image) => {
    const container = image.closest('.kg-gallery-image');
    const width = image.attributes.width.value;
    const height = image.attributes.height.value;
    const ratio = width / height;
    container.style.flex = `${ratio} 1 0%`;
});

/* Subscribe */

const subscribeButtons = document.querySelectorAll('.subscribe');
const modal = document.querySelector('.modal');
const closeModalBtn = document.querySelector('.modal .close');
const hash = location.hash.substr(1);

if (hash === 'subscribe') {
    modal.classList.remove('invisible');
}

closeModalBtn.addEventListener('click', () => {
    modal.classList.add('invisible');
    window.history.pushState("", "", currentPath);
});

[].forEach.call(subscribeButtons, (button) => {
    button.addEventListener('click', () => {
        modal.classList.remove('invisible');
    });
});

document.onkeydown = (evt) => {
    evt = evt || window.event;
    if (evt.keyCode === 27) {
        modal.classList.add('invisible');
    }
};

/* Notification */

const notification = document.querySelector('.notification');
const closeNotificationBtn = document.querySelector('.notification .close');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const action = urlParams.get('action')

if (action === 'subscribe') {
    notification.classList.remove('hidden');
}

closeNotificationBtn.addEventListener('click', () => {
    notification.classList.add('hidden');
    window.history.pushState("", "", currentPath);
});

/* Titles */

var titles = document.querySelectorAll('article a, main h1');

[].forEach.call(titles, function(title) {
    title.innerHTML = title.innerHTML.replace(" ?", "&nbsp;?");
});

/* Custom */

fetch('https://store.zapier.com/api/records?secret=GodoRihdRuwd1~')
    .then((d) => d.json().then(({ subscribers }) => [...document.querySelectorAll('.subscribers')].forEach((span) => {
        span.innerHTML = parseInt(subscribers, 10);
    })));

/* End custom */
