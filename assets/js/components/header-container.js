function buildHeader() {
  const header = document.querySelector(".header-container");
  if (!header) {
    console.error('Ingen <header class="header-container"> fundet i HTML');
    return;
  }

  const topbar = document.createElement("div");
  topbar.className = "topbar";
  topbar.innerHTML = `
    <div class="topbar-icon">
      <img src="assets/display/icons/truck-solid.svg" alt="Levering ikon">
    </div>
    <p class="topbar-p">Bestiller du nu, vil din ordre blive sendt i dag</p>
  `;
  header.appendChild(topbar);

  const nav = document.createElement("nav");
  nav.className = "header-nav";
  nav.innerHTML = `
    <div class="burger-btn" id="burger-btn">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
 
    <ul class="nav-list" id="nav-list">
      <li class="nav-item"><a href="#product-groups-id" class="nav-link">Vores Produktgrupper</a></li>
      <li class="nav-item"><a href="#recommended-products-id" class="nav-link">Vi Anbefaler</a></li>
      <li class="nav-item"><a href="#contact-form-id" class="nav-link">Kontakt Os</a></li>
    </ul>
  `;
  header.appendChild(nav);

  const burger = nav.querySelector("#burger-btn");
  const navList = nav.querySelector("#nav-list");
  burger.addEventListener("click", () => {
    navList.classList.toggle("show");
    burger
      .querySelectorAll(".bar")
      .forEach((bar) => bar.classList.toggle("active"));
  });
}

export function Header() {
  
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildHeader, { once: true });
  } else {
    buildHeader();
  }
}
