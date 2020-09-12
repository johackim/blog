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

if (modal) {
    const closeModalBtn = document.querySelector('.modal .close');
    const hash = window.location.hash.substr(1);

    if (hash === 'subscribe') {
        modal.classList.remove('invisible');
    }

    closeModalBtn.addEventListener('click', () => {
        modal.classList.add('invisible');
        window.history.pushState('', '', currentPath);
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
            window.history.pushState('', '', currentPath);
        }
    };
}

/* Notification */

const notification = document.querySelector('.notification');
const closeNotificationBtn = document.querySelector('.notification .close');

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const action = urlParams.get('action');

if (action === 'subscribe') {
    notification.classList.remove('hidden');

    if (urlParams.get('success') === 'true') {
        document.querySelector('.notification-subscribe-success').classList.remove('hidden');
    } else {
        document.querySelector('.notification-subscribe-failed').classList.remove('hidden');
    }
}

if (action === 'signin') {
    notification.classList.remove('hidden');

    if (urlParams.get('success') === 'true') {
        document.querySelector('.notification-signin-success').classList.remove('hidden');
    } else {
        document.querySelector('.notification-signin-failed').classList.remove('hidden');
    }
}

closeNotificationBtn.addEventListener('click', () => {
    notification.classList.add('hidden');
    window.history.pushState('', '', currentPath);
});

/* Stripe */

const stripe = urlParams.get('stripe');

if (stripe === 'success') {
    document.querySelector('.notification-checkout-success').classList.remove('hidden');
    notification.classList.remove('hidden');
}

/* Titles */

const titles = document.querySelectorAll('article a, main h1');

[].forEach.call(titles, (title) => {
    title.innerHTML = title.innerHTML.replace(' ?', '&nbsp;?');
});

/* Menu */

const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('#options-menu');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });

    window.addEventListener('click', (e) => {
        if (!document.querySelector('#options-menu').contains(e.target)) {
            menu.classList.add('hidden');
        }
    });
}

/* Custom */

fetch('https://store.zapier.com/api/records?secret=GodoRihdRuwd1~')
    .then((d) => d.json().then(({ subscribers }) => [...document.querySelectorAll('.subscribers')].forEach((span) => {
        span.innerHTML = parseInt(subscribers, 10);
    })));

/* End custom */

/* Carousel */

$(document).ready(() => {
    $('.slider').slick({
        dots: true,
        arrows: false,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
    });
});
