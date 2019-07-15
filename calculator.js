var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
define("item", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("init", ["require", "exports", "jquery"], function (require, exports, jquery_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var calculators;
    var initialized = false;
    let itemList;
    let hostessList = [
        { "NAME": "Yuki", "KIND": "HOSTESS", "SEXY": -1, "BEAUTY": 2, "CUTY": 2, "FUNNY": 1, "BUY": 0 },
        { "NAME": "Chika", "KIND": "HOSTESS", "SEXY": 2, "BEAUTY": 3, "CUTY": 1, "FUNNY": 0, "BUY": 0 },
        { "NAME": "Mana", "KIND": "HOSTESS", "SEXY": 2, "BEAUTY": 1, "CUTY": 2, "FUNNY": 1, "BUY": 0 },
        { "NAME": "Ai", "KIND": "HOSTESS", "SEXY": 1, "BEAUTY": 1, "CUTY": 2, "FUNNY": 2, "BUY": 0 },
        { "NAME": "Hibiki", "KIND": "HOSTESS", "SEXY": 3, "BEAUTY": 2, "CUTY": 1, "FUNNY": 0, "BUY": 0 },
        { "NAME": "Saki", "KIND": "HOSTESS", "SEXY": 1, "BEAUTY": 2, "CUTY": 1, "FUNNY": 2, "BUY": 0 },
    ];
    function init(src) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!initialized) {
                initialized = true;
                var itemList = yield jquery_1.default.get('caba_item_list.bin_c.json');
            }
        });
    }
    document.addEventListener("DOMContentLoaded", () => init("DOMContentLoaded"));
    window.addEventListener("load", () => init("load"));
});
