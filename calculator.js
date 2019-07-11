var calculators;
var initialized = false;
function init(src) {
    if (!initialized) {
        initialized = true;
    }
}
document.addEventListener("DOMContentLoaded", () => init("DOMContentLoaded"));
window.addEventListener("load", () => init("load"));
