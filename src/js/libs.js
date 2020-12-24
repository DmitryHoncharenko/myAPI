import { createClient } from "pexels";
import refs from "./refs.js";
import templates from "../templates/item.hbs";

let key = "563492ad6f917000010000010bc7d6cc1a58490e999eb6b49b04379d";

const client = createClient(key);
console.log(client);


// client.photos.random().then((obj) => {
//     console.log(obj);
//     img.src = obj.src.original;
// });

let query = "lotus";
client.photos.search({ query, per_page: 10 }).then((result) => {
    console.log(result.photos);
    const items = templates(result.photos);
    refs.gallery.insertAdjacentHTML("afterbegin", items)
});


