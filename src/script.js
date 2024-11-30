import { fruits } from "./fruit.js";
import Handlebars from "handlebars";
import fruithbs from "bundle-text:./templates/fruits.hbs";
const fruitTemplate = Handlebars.compile(fruithbs);
const html = fruitTemplate(fruits);
document.body.innerHTML = html;
