// import functions
import { GetData } from "../fetch.js";
//

// define variables
const reco_list = await GetData("assets/data/recommended.json");
//

export const Recommended = () => {
  console.log(reco_list);
  // skriv din function her, og lav de ændringer i koden du har brug for -Rasmus
};

// === RECOMMENDED (ANBEFALEDE PRODUKTER/ARTIKLER) ===
document.addEventListener("DOMContentLoaded", () => {
  const recommended = [
    { title: "Moderne køkken", img: "images/kitchen.jpg" },
    { title: "Stilfuldt badeværelse", img: "images/bathroom.jpg" },
    { title: "Hyggelig stue", img: "images/livingroom.jpg" },
  ];

  const recommendedContainer = document.createElement("div");
  recommendedContainer.classList.add("recommended");

  recommended.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("recommended-card");
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}">
      <h3>${item.title}</h3>
    `;
    recommendedContainer.appendChild(card);
  });

  // Tilføj "recommended" lige efter produktgalleriet
  const productSection = document.querySelector(".product");
  if (productSection) {
    productSection.insertAdjacentElement("afterend", recommendedContainer);
  }
});

//test comment

//ny fil

