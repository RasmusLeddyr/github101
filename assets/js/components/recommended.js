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
