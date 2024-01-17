const swiperTarrifs = new Swiper(".swiper-tarrifs", {
  spaceBetween: 20,
  centeredSlides: true,
  speed: 1000,
  parallax: true,
  rewind: true,
});

swiperTarrifs.setGrabCursor();

const showPrevTarrif = () => {
  swiperTarrifs.slidePrev();
};

const showNextTarrif = () => {
  swiperTarrifs.slideNext();
};

const showTarrifByIndex = (index) => {
  swiperTarrifs.slideTo(index, 1000);
  const hero = document.querySelector('.hero');
  window.scrollTo({
    top: document.querySelector('.tarrifs') + hero.getBoundingClientRect().height - (-130),
    behavior: 'smooth',
  });
};

const slides = swiperTarrifs.slides;
const ticker = document.querySelector("[data-ticker='tarrifs']");
const tickerElements = ticker.querySelectorAll('.ticker__item');
const cards = document.querySelectorAll('.card');

for (let card of cards) {
  card.addEventListener('click', () => {
    const tarrif = card.dataset.card;
    console.log(tarrif);
    const index = slides.findIndex((element) => {
      const currentTarrif = element.dataset.tarrif;
      if (tarrif === currentTarrif) {
        return true;
      }
    })

    showTarrifByIndex(index);
    closeModal('.modal--tarrifs');
  });
}

const changeTickerText = (value) => {

  gsap.to(ticker, { opacity: 0, xPercent: -100 });


  setTimeout(() => {
    for (let element of tickerElements) {
      element.textContent = value;
    }

    gsap.to(ticker, { opacity: 1, xPercent: 0 });
  }, 750);
};

swiperTarrifs.on('slideChange', () => {
  const activeIndex = swiperTarrifs.activeIndex;
  const slide = slides.at(activeIndex);
  const tarrif = slide.dataset.tarrif;
  changeTickerText(tarrif);
});
