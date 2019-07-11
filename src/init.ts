var calculators: any;
var initialized = false;

function init(src: string)
{
    if (!initialized)
    {
        initialized = true;
    }
}

document.addEventListener("DOMContentLoaded", () => init("DOMContentLoaded"));
window.addEventListener("load", () => init("load"));