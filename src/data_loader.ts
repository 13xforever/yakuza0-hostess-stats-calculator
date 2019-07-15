import { Item, Dictionary } from "item";

export let ItemList: Dictionary<Dictionary<Item>> =
{
    "HAIRACC":  { "None": { "NAME": "None", "KIND": "HAIRACC",  "SEXY": 0, "BEAUTY": 0, "CUTY": 0, "FUNNY": 0, "BUY": 0 }, },
    "GLASSES":  { "None": { "NAME": "None", "KIND": "GLASSES",  "SEXY": 0, "BEAUTY": 0, "CUTY": 0, "FUNNY": 0, "BUY": 0 }, },
    "EARRING":  { "None": { "NAME": "None", "KIND": "EARRING",  "SEXY": 0, "BEAUTY": 0, "CUTY": 0, "FUNNY": 0, "BUY": 0 }, },
    "NECKLACE": { "None": { "NAME": "None", "KIND": "NECKLACE", "SEXY": 0, "BEAUTY": 0, "CUTY": 0, "FUNNY": 0, "BUY": 0 }, },
    "NAIL":     { "None": { "NAME": "None", "KIND": "NAIL",     "SEXY": 0, "BEAUTY": 0, "CUTY": 0, "FUNNY": 0, "BUY": 0 }, },
    "RING":     { "None": { "NAME": "None", "KIND": "RING",     "SEXY": 0, "BEAUTY": 0, "CUTY": 0, "FUNNY": 0, "BUY": 0 }, },
    "WATCH":    { "None": { "NAME": "None", "KIND": "WATCH",    "SEXY": 0, "BEAUTY": 0, "CUTY": 0, "FUNNY": 0, "BUY": 0 }, },
    "BRACELET": { "None": { "NAME": "None", "KIND": "BRACELET", "SEXY": 0, "BEAUTY": 0, "CUTY": 0, "FUNNY": 0, "BUY": 0 }, },
};

let hostessList: Item[] = [
    { "NAME": "Yuki",   "KIND": "HOSTESS", "SEXY":-1, "BEAUTY": 2, "CUTY": 2, "FUNNY": 1, "BUY": 0 },
    { "NAME": "Chika",  "KIND": "HOSTESS", "SEXY": 2, "BEAUTY": 3, "CUTY": 1, "FUNNY": 0, "BUY": 0 },
    { "NAME": "Mana",   "KIND": "HOSTESS", "SEXY": 2, "BEAUTY": 1, "CUTY": 2, "FUNNY": 1, "BUY": 0 },
    { "NAME": "Ai",     "KIND": "HOSTESS", "SEXY": 1, "BEAUTY": 1, "CUTY": 2, "FUNNY": 2, "BUY": 0 },
    { "NAME": "Hibiki", "KIND": "HOSTESS", "SEXY": 3, "BEAUTY": 2, "CUTY": 1, "FUNNY": 0, "BUY": 0 },
    { "NAME": "Saki",   "KIND": "HOSTESS", "SEXY": 1, "BEAUTY": 2, "CUTY": 1, "FUNNY": 2, "BUY": 0 },
]

export async function InitItemList()
{
    var items: Dictionary<Item> = await $.get('caba_item_list.bin_c.json');
}
