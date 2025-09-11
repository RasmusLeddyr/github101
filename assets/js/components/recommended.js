import { GetData } from "../fetch.js";

const recommended = await GetData("assets/data/recommended.json");

export const Recommended = async () => {
  const container = document.querySelector(".recommended-container");
  if (!container) return;

  container.innerHTML = ""; // ryd containeren

  recommended.forEach((item) => {
    container.insertAdjacentHTML(
      "beforeend",
      `
      <article class="recommended-card">
        <div class="card-img">
          <img src="assets/display/products/${item.img}" alt="${item.title}">
        </div>
        <div class="card-info">
          <p class="brand">${item.brand}</p>
          <p class="title">${item.title}</p>
          <p class="price">${item.price}</p>
        </div>
      </article>
      `
    );
  });
};
