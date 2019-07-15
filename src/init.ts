import $ from "jquery";
import {Item, Dictionary} from "item";

var calculators: any;
var initialized = false;
let itemList: Dictionary<Item>;
let hostessList: Item[] = [
    { "NAME": "Yuki",   "KIND": "HOSTESS", "SEXY":-1, "BEAUTY": 2, "CUTY": 2, "FUNNY": 1, "BUY": 0 },
    { "NAME": "Chika",  "KIND": "HOSTESS", "SEXY": 2, "BEAUTY": 3, "CUTY": 1, "FUNNY": 0, "BUY": 0 },
    { "NAME": "Mana",   "KIND": "HOSTESS", "SEXY": 2, "BEAUTY": 1, "CUTY": 2, "FUNNY": 1, "BUY": 0 },
    { "NAME": "Ai",     "KIND": "HOSTESS", "SEXY": 1, "BEAUTY": 1, "CUTY": 2, "FUNNY": 2, "BUY": 0 },
    { "NAME": "Hibiki", "KIND": "HOSTESS", "SEXY": 3, "BEAUTY": 2, "CUTY": 1, "FUNNY": 0, "BUY": 0 },
    { "NAME": "Saki",   "KIND": "HOSTESS", "SEXY": 1, "BEAUTY": 2, "CUTY": 1, "FUNNY": 2, "BUY": 0 },
]

async function init(src: string)
{
    if (!initialized)
    {
        initialized = true;
        var itemList = await $.get('caba_item_list.bin_c.json');
    }
}

document.addEventListener("DOMContentLoaded", () => init("DOMContentLoaded"));
window.addEventListener("load", () => init("load"));