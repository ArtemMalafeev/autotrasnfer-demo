gsap.registerPlugin(ScrollTrigger);

/* Loader */

const tl_loader = gsap.timeline();

tl_loader.set('.loader__top', { yPercent: 70 });
tl_loader.set('.loader__left', { yPercent: 102, xPercent: 25 });
tl_loader.set('.loader__right', { yPercent: 102, xPercent: -25 });
tl_loader.set('.loader__name', { opacity: 0, xPercent: -50 });
tl_loader.set('.loader__logo', { opacity: 0, yPercent: -200, xPercent: 50 });

tl_loader
    .to('.loader__item--1', { xPercent: 0 })
    .to('.loader__item--2', { xPercent: 0 }, '<')
    .to('.loader__item--1', { xPercent: -200, delay: .25 })
    .to('.loader__item--2', { xPercent: 200 }, '<')
    .to('.loader__logo', { yPercent: 0, opacity: 1, duration: 0.5, scale: 1.2, ease: Bounce.easeOut })
    .to('.loader__top', { yPercent: 0, xPercent: 0 })
    .to('.loader__left', { yPercent: 0, xPercent: 0 }, '<')
    .to('.loader__right', { yPercent: 0, xPercent: 0 }, '<')
    .to('.loader__logo', { xPercent: 0 })
    .to('.loader__name', { xPercent: 0, opacity: 1 }, '<')
    .to('.loader__title', { opacity: 0, duration: 1, scale: 1 })
    .to('.loader', { yPercent: -100, duration: 1 }, '-=0.5')

/* Header */

const tl_header = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        start: '0%',
        end: '50%',
        scrub: true,
    },
});

tl_header.fromTo('.header__preview',
    {
        opacity: 1,
    },

    {
        opacity: 0,
    },
);

tl_header.to('.header__preview',
    {
        height: '71px',
    },
);

tl_header.fromTo('.header__navigation',
    {
        // opacity: 0,
        display: "none",
    },
    {
        display: "flex",
        // opacity: 1,
    },
    '<',
);

tl_header.fromTo('.navigation__toggle',
    {
        opacity: 0,
    },
    {
        opacity: 1,
    },
    '<',
);

tl_header.fromTo('.navigation__icon',
    {
        opacity: 0,
    },
    {
        opacity: 1,
    },
    '<',
);

/* Hero */

const tl_hero = gsap.timeline({
    scrollTrigger: {
        trigger: '.hero',
        start: '-30%',
        end: '100%',
        scrub: true,
    },
});

tl_hero.to('.hero__map', {
    scale: 1.3,
});

// tl_1.set('.hero__title', { opacity: 1 });

// tl_1.to('.hero__title', {
//     y: 100,
//     display: 'flex',
//     opacity: 0,
// });

/* Service */

function gsapFadeAnimation(elements) {
    elements.forEach((element) => {
        ScrollTrigger.create({
            trigger: element,
            start: "top 70%",
            animation: gsap.from(element, {
                autoAlpha: 0,
                y: 150,
                duration: 1.0,
                ease: "power1"
            }),
        });
    });
};

const collageItems_title = Array.from(document.querySelectorAll(".advantage__title"));
const collageItems_description = Array.from(document.querySelectorAll(".advantage__description"));
const collageItems_image = Array.from(document.querySelectorAll(".advantage__image"));

gsapFadeAnimation([...collageItems_title, ...collageItems_description, ...collageItems_image]);

/* Contact */

gsap.from('.contact__item', {
    scrollTrigger: {
        trigger: '.contact',
        start: '-55%',
        end: '10%',
        scrub: true,
    },

    opacity: 0,
    stagger: 0.25,
});

/* About */

const tlAbout = gsap.timeline({
    scrollTrigger: {
        trigger: '.about',
        scrub: true,
        start: '-50%',
        end: '-20%',
    },
});

tlAbout.fromTo('.about__image',
    {
        x: '-100%',
        opacity: 0,
    },
    {
        x: '0%',
        opacity: 1,
    },
);

tlAbout.fromTo('.about__information',
    {
        y: '-100%',
        opacity: 0,
    },
    {
        y: '0%',
        opacity: 1,
    },
    '<',
);

/* Reviews */

const tl_reviews = gsap.timeline({
    scrollTrigger: {
        trigger: '.reviews',
        start: '0 center',
        end: '+=300',
        scrub: true,
    },
});

tl_reviews.from('.reviews', {
    css: {
        background: '#F3DFC1',
    },
});

tl_reviews.from('.reviews__title', {
    css: {
        color: '#161029',
    },
}, '<');

tl_reviews.from('.review', {
    css: {
        color: '#161029',
    },
}, '<');

tl_reviews.from('.review__content', {
    css: {
        'border-color': '#161029',
    },
}, '<');