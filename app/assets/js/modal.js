const body = document.querySelector('.page');
gsap.set('.modal--tarrifs', { yPercent: -200 });
gsap.set('.modal--reviews', { yPercent: -200 });

const openModal = (modal) => {
    gsap.set('body', { overflow: 'hidden' });
    const tl__modal = gsap.timeline({});

    tl__modal
        .to(modal, { yPercent: 0 })
        .fromTo(modal,
            { backdropFilter: 'blur(0px)', background: 'transparent' },
            {
                background: 'rgba(22, 15, 41, 0.01)', backdropFilter: 'blur(94px)'
            })
        .fromTo('.modal__inner', { opacity: 0 }, { opacity: 1 }, '<')
};

const closeModal = (type) => {
    const modal = document.querySelector(type);
    gsap.set('body', { overflow: 'visible' });

    const tl__modal = gsap.timeline({});

    tl__modal
        .fromTo('.modal__inner', { opacity: 1 }, { opacity: 0 })
        .fromTo(modal,
            { backdropFilter: 'blur(94px)', background: 'rgba(22, 15, 41, 0.01)' },
            {
                background: 'transparent', backdropFilter: 'blur(0px)'
            }, '<')
        .to(modal, { yPercent: -100 })
};