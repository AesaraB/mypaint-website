import { switchTheme } from "./theme.js";
import { toggleMenu } from "./reactiveDesign.js";

document.getElementById("themeButton").addEventListener('click', switchTheme);
document.getElementById("headerNavMenu").addEventListener('click', toggleMenu);
