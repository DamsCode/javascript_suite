/* becode/javascript
 *
 * /11-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const inp = document.getElementById("hero-id");
    const handlereponse = (rep) => {
        if (rep.ok) {
            console.log("x-men supprimé");
        } else {
            console.log("pas supprimé");
        }
    };

    document.getElementById("run").addEventListener("click", e => {

        fetch(`http://localhost:3000/heroes/${Number(inp.value)}`, {
            method: 'DELETE',
        }).then(handlereponse);
    });
})();