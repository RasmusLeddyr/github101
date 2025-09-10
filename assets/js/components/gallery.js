// import functions
import { GetData } from "../fetch.js";
//

// define variables
const LIST_gal = await GetData("assets/data/gallery.json");
const ELMT_gal_cont = document.querySelector(".gallery-container");
//

// return template for gallery section
function ListTmpl() {
  return `
<section class="gallery-container">
    <ul class="gal_list">
    </ul>
    <dialog class="gal_show"></dialog>
</section>
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

//
export const Gallery = () => {
  if (ELMT_gal_cont) {
    ELMT_gal_cont.insertAdjacentHTML("beforeend", ListTmpl());
    const ELMT_gal_ul = ELMT_gal_cont.querySelector(".gal_list");
    LIST_gal.forEach((item) => {
      ELMT_gal_ul.insertAdjacentHTML("beforeend", ItemTmpl(item));
    });
  }
};
//
