// import functions
import { GetData } from "../fetch.js";
//

// define variables
const LIST_gal = await GetData("assets/data/gallery.json");
const ELMT_gal = document.querySelector(".gallery-container");
//

// return template for gallery section
function GalTmpl() {
  return `
  <ul class="gal_list">
  </ul>
  <dialog class="gal_show"></dialog>
`;
}
//

// return template for gallery item
function ItemTmpl(item) {
  return `
<li class="gal_item">
    <img src="assets/display/gallery/${item.src}" alt="${item.alt}" />
</li>
`;
}
//

// insert gallery elements
export const Gallery = () => {
  if (ELMT_gal) {
    // insert gallery template
    ELMT_gal.insertAdjacentHTML("beforeend", GalTmpl());
    //

    // define variables
    const ul = ELMT_gal.querySelector(".gal_list");
    const dial = ELMT_gal.querySelector(".gal_show");
    //

    // insert gallery item using template
    LIST_gal.forEach((item) => {
      ul.insertAdjacentHTML("beforeend", ItemTmpl(item));
    });
    const ELMT_gal_items = ul.querySelectorAll(".gal_item");
    //

    // add click event for each image to open dialog
    ELMT_gal_items.forEach((item) => {
      item.addEventListener("click", () => {
        dial.innerHTML = item.innerHTML;
        dial.showModal();
      });
    });
    //

    // add click event for dialog to close itself
    dial.addEventListener("click", () => {
      dial.close();
    });
    //
  }
};
//
