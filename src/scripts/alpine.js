import Alpine from "./module.esm.js";
import intersect from './intersect.esm.js';
import focus from './focus.esm.js';
 
window.Alpine = Alpine;

Alpine.plugin(intersect);
Alpine.plugin(focus);

Alpine.start();
