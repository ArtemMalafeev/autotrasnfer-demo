const swiperHero = new Swiper(".swiper-hero", {
    spaceBetween: 20,
    autoHeight: true,
    centeredSlides: true,
    autoplay: {
        delay: 3500,
    },
    speed: 1000,
    loop: true,
});

swiperHero.setGrabCursor();

const showPrevCar = () => {
    swiperHero.slidePrev();
};

const showNextCar = () => {
    swiperHero.slideNext();
};