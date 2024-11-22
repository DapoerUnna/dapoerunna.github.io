const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    });
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
    });
}

const navLink = document.querySelectorAll('.nav_link');

const linkAction = () => {
    navMenu.classList.remove('show-menu');
};

navLink.forEach(n => n.addEventListener('click', linkAction));

const blurHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 50 ? header.classList.add('blur-header') 
                         : header.classList.remove('blur-header');
};

window.addEventListener('scroll', blurHeader);

const sr = ScrollReveal({
    origin: 'top',
    distance: '40px',
    // opacity: 1,
    // scale: 1.1,
    duration: 2500,
    delay: 300,
    reset: true // Uncomment this line if you want the reveal effect to reset
});

sr.reveal('.home_data, .about_img, .about_data');


sr.reveal('.home_data', { delay: 200 });//{ rotate: { z: -15 } });
sr.reveal('.home_image', { delay: 200 });//{ rotate: { z: -15 } });
sr.reveal('.home_cake', { delay: 200 });//{ rotate: { z: 15 } });
sr.reveal('.home_footer', { delay: 200 });//{ scale: 1, origin: 'bottom' });