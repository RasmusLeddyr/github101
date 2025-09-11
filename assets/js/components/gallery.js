// import functions
import { GetData } from "../fetch.js";
//

// define variables
const LIST_gal = await GetData("assets/data/gallery.json");
const ELMT_gal_cont = document.querySelector(".gallery-container");
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
  if (ELMT_gal_cont) {
    // insert gallery template
    ELMT_gal_cont.insertAdjacentHTML("beforeend", GalTmpl());
    //

    // define variables
    const ELMT_ul = ELMT_gal_cont.querySelector(".gal_list");
    const ELMT_dial = ELMT_gal_cont.querySelector(".gal_show");
    //

    // insert gallery item using template
    LIST_gal.forEach((item) => {
      ELMT_ul.insertAdjacentHTML("beforeend", ItemTmpl(item));
    });
    const ELMT_gal_items = ELMT_ul.querySelectorAll(".gal_list");
    /* ELMT_gal_items.forEach(item) => {
        ELMT_dial.innerHTML = item.innerHTML;
  ELMT_dial.showModal();
    } */
    //
  }
};
//
