import $ from "jquery";

namespace y0
{
    interface Item
    {
        KIND: string;
        NAME: string;
        BUY: number;
        SEXY: number;
        BEAUTY: number;
        CUTY: number;
        FUNNY: number;
    }

    interface Dictionary<TValue>
    {
        [Key: string]: TValue;
    }

    type Kind = string;
    let itemList: Dictionary<Item>;
    
    $.get('caba_item_list.bin_c.json')
    .done( (data: Dictionary<Item>) => {
        itemList = data;
    })
}