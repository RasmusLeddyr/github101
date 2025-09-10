const sliderContainer = document.querySelector('.slider-container')

const sliderTmpl = () => {
    return `
    <img class="image-in-slider" src="" alt="" />

      <div class="hero-text-container">
        <p class="hero-text fatface">
          Vi stræber efter at skabe en unik shoppingoplevelse, <br />
          hvor elegance møder funktionalitet
        </p>
      </div>`;
}


const renderSlider = () => {
  if (sliderContainer) {
    sliderContainer.insertAdjacentHTML("beforeend", sliderTmpl);
  }

  //henter html-elementet billedet skal i
  const activeImage = document.querySelector(".image-in-slider");

  //index-variabel som bruges til at hente det korrekte billede fra arrayen
  let currentImageIndex = 0;

  //array variabel som indeholder billedestier til billederne som skal i slideren
  let images = [
    "../assets/display/slider/hero_img.jpg",
    "../assets/display/slider/hero_img2.jpg",
    "../assets/display/slider/hero_img3.jpg",
  ];

  //funktion der sætter billedet ind i html-elementet
  function setActiveSlide() {
    //sætter html-elementets src-tag til at være lig med det billede som currentIndex-tælleren er på
    activeImage.src = images[currentImageIndex];
  }

  //kalder funktionen så billedet loades
  setActiveSlide();

  //definerer en funktion som skifter til næste billede i rækken
  function next() {
    //hvis index-tælleren ikke er nået det sidste billede, så hæver den med 1
    if (currentImageIndex < images.length - 1) {
      currentImageIndex += 1;
    } else {
      //hvis index-tælleren er nået sidste billede sætter den værdien til 0 (første billede i arrayen)
      currentImageIndex = 0;
    }

    //opdatere billede efter index-tæller har skiftet værdi
    setActiveSlide();
  }

  //kalder setInterval funktion og sætter den til at kalde next-funktionen hvert 3. sekund
  setInterval(next, 3000);
}