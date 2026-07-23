// ==UserScript==
// @name         Neopets - Change Inventory Columns Amount
// @version      V1.0.1
// @description  Changes the amount of columns per inventory from 7 to however many is desired within input (recommended 10 or lower). Made mostly for myself to get a bit more on the page horizontally rather than vertically.
// @author       EsiEni
// @downloadURL  https://github.com/EsiEni/NeopetsScripts/blob/main/changeInventoryColumnNum.js
// @updateURL    https://github.com/EsiEni/NeopetsScripts/blob/main/changeInventoryColumnNum.js
// @license      Unlicense
// @match        *://*.neopets.com/inventory.phtml*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=neopets.com
// ==/UserScript==

// Change "columns" to the number of items you want displayed in your inventory row
const columns = 10;

// The rest of this you can ignore for now!
const observer = new MutationObserver(() => {
    const grid = document.querySelector(".itemgrid7__2020");

    if (grid) {
        grid.style.gridTemplateColumns = `repeat(${columns}, minmax(0, 1fr))`;
        observer.disconnect(); 
    }
});

observer.observe(document.body, {
    childList: true,
    subtree: true
});
