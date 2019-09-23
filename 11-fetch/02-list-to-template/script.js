/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const template = document.getElementById("tpl-hero");

    const getData = async(rep) => {
        const tabxmen = await rep.json();
        tabxmen.forEach(insertDataTemp);
    };

    const insertDataTemp = async(xmen) => {
        const clone = document.importNode(template.content, true);
        clone.querySelector('.name').innerText = xmen.name;
        clone.querySelector(".alter-ego").innerText = xmen.alterEgo;
        clone.querySelector(".powers").innerText = xmen.abilities;
        document.querySelector("#target").appendChild(clone);
    };

    document.getElementById('run').addEventListener("click", () => fetch("http://localhost:3000/heroes").then(getData));
})();