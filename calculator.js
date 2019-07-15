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
define("data_loader", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ItemList = {
        "HAIRACC": { "None": { "NAME": "None", "KIND": "HAIRACC", "SEXY": 0, "BEAUTY": 0, "CUTY": 0, "FUNNY": 0, "BUY": 0 }, },
        "GLASSES": { "None": { "NAME": "None", "KIND": "GLASSES", "SEXY": 0, "BEAUTY": 0, "CUTY": 0, "FUNNY": 0, "BUY": 0 }, },
        "EARRING": { "None": { "NAME": "None", "KIND": "EARRING", "SEXY": 0, "BEAUTY": 0, "CUTY": 0, "FUNNY": 0, "BUY": 0 }, },
        "NECKLACE": { "None": { "NAME": "None", "KIND": "NECKLACE", "SEXY": 0, "BEAUTY": 0, "CUTY": 0, "FUNNY": 0, "BUY": 0 }, },
        "NAIL": { "None": { "NAME": "None", "KIND": "NAIL", "SEXY": 0, "BEAUTY": 0, "CUTY": 0, "FUNNY": 0, "BUY": 0 }, },
        "RING": { "None": { "NAME": "None", "KIND": "RING", "SEXY": 0, "BEAUTY": 0, "CUTY": 0, "FUNNY": 0, "BUY": 0 }, },
        "WATCH": { "None": { "NAME": "None", "KIND": "WATCH", "SEXY": 0, "BEAUTY": 0, "CUTY": 0, "FUNNY": 0, "BUY": 0 }, },
        "BRACELET": { "None": { "NAME": "None", "KIND": "BRACELET", "SEXY": 0, "BEAUTY": 0, "CUTY": 0, "FUNNY": 0, "BUY": 0 }, },
    };
    let hostessList = [
        { "NAME": "Yuki", "KIND": "HOSTESS", "SEXY": -1, "BEAUTY": 2, "CUTY": 2, "FUNNY": 1, "BUY": 0 },
        { "NAME": "Chika", "KIND": "HOSTESS", "SEXY": 2, "BEAUTY": 3, "CUTY": 1, "FUNNY": 0, "BUY": 0 },
        { "NAME": "Mana", "KIND": "HOSTESS", "SEXY": 2, "BEAUTY": 1, "CUTY": 2, "FUNNY": 1, "BUY": 0 },
        { "NAME": "Ai", "KIND": "HOSTESS", "SEXY": 1, "BEAUTY": 1, "CUTY": 2, "FUNNY": 2, "BUY": 0 },
        { "NAME": "Hibiki", "KIND": "HOSTESS", "SEXY": 3, "BEAUTY": 2, "CUTY": 1, "FUNNY": 0, "BUY": 0 },
        { "NAME": "Saki", "KIND": "HOSTESS", "SEXY": 1, "BEAUTY": 2, "CUTY": 1, "FUNNY": 2, "BUY": 0 },
    ];
    function InitItemList() {
        return __awaiter(this, void 0, void 0, function* () {
            var items = yield $.get('caba_item_list.bin_c.json');
        });
    }
    exports.InitItemList = InitItemList;
});
define("init", ["require", "exports", "data_loader"], function (require, exports, data_loader_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function init() {
        return __awaiter(this, void 0, void 0, function* () {
            yield data_loader_1.InitItemList();
            for (var k in data_loader_1.ItemList) {
                console.log(k, data_loader_1.ItemList[k]);
            }
        });
    }
    function main() {
        $(document).ready(init);
    }
    exports.main = main;
});
//# sourceMappingURL=calculator.js.map