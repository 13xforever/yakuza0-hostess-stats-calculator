var calculators;
var initialized = false;
function init(src) {
    if (!initialized) {
        initialized = true;
    }
}
document.addEventListener("DOMContentLoaded", () => init("DOMContentLoaded"));
window.addEventListener("load", () => init("load"));
define("item", ["require", "exports", "jquery"], function (require, exports, jquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var y0;
    (function (y0) {
        let itemList;
        jquery_1.default.get('caba_item_list.bin_c.json')
            .done((data) => {
            itemList = data;
        });
    })(y0 || (y0 = {}));
});
