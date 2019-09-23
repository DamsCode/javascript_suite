/* becode/javascript
 *
 * /11-fetch/01-list-to-console/script.js - 11.1: liste vers console
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const afficherData = async(rep) => {
        const tabart = await rep.json();
        tabart.forEach(element => {
            console.log(element);
        });
    };

    document.getElementById('run').addEventListener("click", () => fetch("http://localhost:3000/heroes").then(afficherData));

})();