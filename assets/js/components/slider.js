const sliderContainer = document.querySelector(".slider-container");

let heroText = 'Vi stræber efter at skabe en unik shoppingoplevelse hvor elegance møder funktionalitet';

let images = [
  "../assets/display/slider/hero_img.jpg",
  "../assets/display/slider/hero_img2.jpg",
  "../assets/display/slider/hero_img3.jpg",
];

let i = 0

const sliderTmpl = (i) => {

  return `
    <img class="image-in-slider" src="${images[i]}" alt="" />

      <div class="hero-text-container">
        <p class="hero-text fatface">
          ${heroText}
        </p>
      </div>`;
};

const loadSlider = (index) => {
  if (sliderContainer) {
    sliderContainer.innerHTML = ''
    sliderContainer.insertAdjacentHTML("beforeend", sliderTmpl(index));
  }
}

export const renderSlider = () => {

  loadSlider(i)

  setInterval(() => {

    if (i == images.length - 1) {
      i = 0;
    } else {
      i++;
    }
    
  }, 3000);

}