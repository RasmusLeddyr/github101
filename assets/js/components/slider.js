const sliderContainer = document.querySelector(".slider-container");

let heroText =
  'Vi stræber efter at skabe en unik shoppingoplevelse <br> hvor elegance møder funktionalitet';

let images = [
  "../assets/display/slider/hero_img.jpg",
  "../assets/display/slider/hero_img2.jpg",
  "../assets/display/slider/hero_img3.jpg",
];

let i = 0;

const sliderTmpl = (index) => {
  return `
    <div class="slide fade-in">
      <img class="image-in-slider" src="${images[index]}" alt="" />
      <div class="hero-text-container">
        <p class="hero-text fatface">
          ${heroText}
        </p>
      </div>
    </div>`;
};

const loadSlider = (index) => {
  if (sliderContainer) {
    // tilføj nyt billede oveni
    sliderContainer.insertAdjacentHTML("beforeend", sliderTmpl(index));

    // find alle slides
    const slides = sliderContainer.querySelectorAll(".slide");

    if (slides.length > 1) {
      const prevSlide = slides[0]; // det gamle

      // fade det gamle ud
      prevSlide.classList.remove("fade-in");
      prevSlide.classList.add("fade-out");

      // fjern det gamle fra DOM når animationen er færdig
      prevSlide.addEventListener("animationend", () => {
        prevSlide.remove();
      });
    }
  }
};

export const renderSlider = () => {
  // vis første slide med det samme
  loadSlider(i);

  setInterval(() => {
    if (i === images.length - 1) {
      i = 0;
    } else {
      i++;
    }
    loadSlider(i);
  }, 3000);
};
  