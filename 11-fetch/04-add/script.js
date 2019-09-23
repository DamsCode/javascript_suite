/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let myxmen = {
        name: "",
        alterEgo: "",
        powers: []
    };

    const createxmen = () => {
        myxmen.name = document.querySelector("#hero-name").value;
        myxmen.alterEgo = document.querySelector("#hero-alter-ego").value;
        myxmen.abilities = document.querySelector("#hero-powers").value.split(",");
    };

    const handlereponse = (rep) => {
        if (rep.ok) {
            console.log("x-men créé");
        } else {
            console.log("pas créé");
        }
    };
    const myHeader = new Headers({
        'Content-Type': 'application/json;charset=utf-8'
    });
    const checkvalue = (id) => {
        if (document.querySelector(id).value == "") {
            return false;
        } else
            return true;
    };
    document.getElementById("run").addEventListener("click", e => {
        if (checkvalue("#hero-name") && checkvalue("#hero-alter-ego") && checkvalue("#hero-powers")) {
            createxmen();
            fetch(`http://localhost:3000/heroes/`, {
                method: 'POST',
                headers: myHeader,
                body: JSON.stringify(myxmen)
            }).then(handlereponse)
        };
    });
})();