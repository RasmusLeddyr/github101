// assets/js/components/product-groups.js

import { GetData } from "../fetch.js";
 
// Hent data via GetData (sti er relativ til index.html)

let products = [];

try {

  products = await GetData("assets/data/products.json"); // fx [{ title, icon, description }, ...]

  console.log("[products]", products);

} catch (err) {

  console.error(" Kunne ikke hente products.json:", err);

}
 
// Find containeren i DOM

const productGroups = document.querySelector(".product-groups-container");

if (productGroups) {

  productGroups.innerHTML = `<h2> Vores Tre Produktgrupper </h2>`;

}
const productListTmpl = (product) => {

  return `
<h3>${product.title}</h3>
<div class="product-group">
<div class="icon-text">
<div class="product-icon">
<img src="${product.icon}" alt="${product.title}">
</div>
<p>${product.description}</p>
</div>
</div>

  `;

};
 
// Offentlig init-funktion (kaldes fra main.js)

export const productList = () => {

  if (!productGroups) {

    console.error("Ingen.product-groups-container i DOM");

    return;

  }

  if (!Array.isArray(products) || products.length === 0) {

    productGroups.insertAdjacentHTML(

      "beforeend",

      `<p style="color:#900">Ingen produktgrupper at vise.</p>`

    );

    return;

  }
 
  products.forEach((item) => {

    productGroups.insertAdjacentHTML("beforeend", productListTmpl(item));

  });

};
 