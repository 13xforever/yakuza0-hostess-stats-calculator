import {InitItemList, ItemList} from "data_loader";

async function init()
{
    await InitItemList();
    for (var k in ItemList){
        console.log(k, ItemList[k]);
    }
}

export function main()
{
    $(document).ready(init);
}