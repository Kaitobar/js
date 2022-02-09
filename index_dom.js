import hamburgeMenu from "./dom/menu_hamburguesa.js";
import { digitalClock, alarm } from "./dom/reloj.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgeMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj")
})
