/* becode/javascript
 *
 * /11-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const hid = document.getElementById("hero-id");

    const getData = async(rep) => {
        if (rep.ok) {
            const xmen = await rep.json();
            console.log(xmen);
        } else {
            console.log("x-men non trouvé");

        }

    };

    document.getElementById("run").addEventListener("click", () => {
        fetch(`http://localhost:3000/heroes/${Number(hid.value)}`).then(getData);
    });
})();